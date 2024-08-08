// 'use client';

// import { formSchema } from '@/validationSchema';
// import { NextRequest, NextResponse } from 'next/server';
// import prisma from '../../../prisma/client';

// export async function POST(request: NextRequest) {
//   const body = await request.json();
//   const validation = formSchema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });

//   const newSubmit = await prisma.applicant.create({
//     data: {
//       fullName: body.fullName,
//       street: body.street,
//       city: body.city,
//       state: body.state,
//       zip: body.zip,
//       country: body.country,
//       email: body.email,
//       phone: body.phone,
//       title: body.title,
//       role: body.role,
//       experience: body.experience,
//       about: body.about,
//       filePath: body.filePath,
//       selectedOptions: body.selectedOptions,
//     },
//   });

//   return NextResponse.json(newSubmit, { status: 201 });
// }

// 'use server';

import jsonToCsv from '@/utilities/jsonToCsv';
import { formSchema } from '@/validationSchema';
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
import { useS3Upload } from 'next-s3-upload';
import { z } from 'zod';
import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

const prisma = new PrismaClient();

const s3 = new S3Client({
  region: process.env.S3_UPLOAD_REGION,
  credentials: {
    accessKeyId: process.env.S3_UPLOAD_KEY!,
    secretAccessKey: process.env.S3_UPLOAD_SECRET!,
  },
});

const uploadCsvToS3 = async (csvData: string, fileName: string) => {
  const params = {
    Bucket: process.env.S3_UPLOAD_BUCKET!,
    Key: fileName,
    Body: csvData,
    ContentType: 'text/csv',
  };


  const commannd = new PutObjectCommand(params);
  const response = await s3.send(commannd);

  return response;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Parse and validate the request body
    const body = formSchema.parse(req.body);

    console.log('Parsed body:', body);

    const csvData = Object.keys(body)
    .map((key) => `"${key}","${body[key as keyof typeof body]}"`)
    .join('\n');
    const csvFileName = `${Date.now()}_form_data.csv`;

    await uploadCsvToS3(csvData, csvFileName);

    // const csvData = jsonToCsv(body);
    // const csvBlob = new Blob([csvData], { type: 'text/csv' });

    // const { csvUploadToS3 } = useS3Upload();
    // const { url } = await csvUploadToS3(csvBlob, {
    //   filename: `${Date.now()}_form_data.csv`,
    //   contentType: 'text/csv',
    // });

    // Create a new applicant in the database
    const newSubmit = await prisma.applicant.create({
      data: {
        fullName: body.fullName,
        street: body.street,
        city: body.city,
        state: body.state,
        zip: body.zip,
        country: body.country,
        email: body.email,
        phone: body.phone,
        title: body.title,
        role: body.role,
        experience: body.experience,
        about: body.about,
        // filePath: body.filePath,
        filePath: body.filePath ? body.filePath.path : null, // Adjust according to actual data structure
        // selectedOptions: body.selectedOptions,
        notifyEmail: body.notifyEmail,
        notifyPhone: body.notifyPhone,
      },
    });

    console.log('New applicant stored:', newSubmit);

    return res.status(201).json(newSubmit);
  } catch (error) {
    if (error instanceof z.ZodError) {
      // If validation fails, return a 400 response with validation errors
      console.error('Validation error:', error.errors);
      return res.status(400).json({ errors: error.errors });
    } else {
      // Log and return a 500 response for other errors
      console.error('Error creating applicant:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  } finally {
    await prisma.$disconnect();
  }
}
