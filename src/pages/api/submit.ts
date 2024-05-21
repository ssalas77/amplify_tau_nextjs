'use client';

import formSchema from '../../validationSchema';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/client';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = formSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });

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
      filePath: body.filePath,
      selectedOptions: body.selectedOptions,
    },
  });

  return NextResponse.json(newSubmit, { status: 201 });
}
