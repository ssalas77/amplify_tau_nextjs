'use client';

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { DocumentIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useS3Upload } from 'next-s3-upload';
import statesData from '../assets/data/statesData';
import axios from 'axios';
import { formSchema } from '../validationSchema';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

type FormData = z.infer<typeof formSchema>;

const ApplicationFormTwo = () => {
  const {
    register,
    handleSubmit,
    // control,
    // setValue,
    // watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  let { uploadToS3 } = useS3Upload();

  let handleFileChange = async (event: any) => {
    let file = event.target.files[0];
    let { url } = await uploadToS3(file);

    console.log('Successfully uploaded to S3!');
  };

  // const { FileInput, openFileDialog, uploadToS3 } = useS3Upload();
  // const [fileUrl, setFileUrl] = useState<string | null>(null);
  // const [file, setFile] = useState<File | null>(null);

  const router = useRouter();

  // const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const selectedFile = event.target.files?.[0];
  //   if (selectedFile) {
  //     // const { url } = await uploadToS3(selectedFile);
  //     setFile(selectedFile);
  //   }
  // };

  // const handleUpload = async () => {
  //   if (file) {
  //     try {
  //       const { url } = await uploadToS3(file);
  //       console.log('File uploaded successfully:', url);
  //     } catch (error) {
  //       console.error('Error uploading files:', error);
  //     }
  //   } else {
  //     console.error('No file selected');
  //   }
  // };

  //   const onSubmit: SubmitHandler<FormData> = async (data) => {
  // const onSubmit: SubmitHandler<FormData> = async (data) => {

  const preventEnterKeySubmission = (
    e: React.KeyboardEvent<HTMLFormElement>
  ) => {
    const target = e.target;
    if (e.key === 'Enter' && target instanceof HTMLInputElement) {
      e.preventDefault();
    }
  };

  const onSubmit = async (data: any) => {
    // if (!fileUrl) {
    //   if (!file) {
    //   alert('Please upload a resume before submitting');
    //   return;
    // }

    // const dataToSubmit = { ...data, filePath: fileUrl };
    // const dataToSubmit = { ...data, filePath: file };
    // const dataToSubmit = { ...data };

    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: JSON.stringify(dataToSubmit),
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert('Form submitted successfully');
      // Optionally, reset the form or redirect
      // reset();
      router.push('/thankyou');
    } else {
      alert('Failed to submit form');
    }
  };

  return (
    <div className='grid min-h-screen'>
      <div className='grid grid-cols-6 grid-rows-1 gap-4'>
        <div className='row-start-1 col-span-4 col-start-2 lg:col-span-1 lg:col-start-1'></div>
      </div>

      <form
        // onSubmit={handleSubmit(onSubmit)}
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={preventEnterKeySubmission}
        className='mx-3 lg:mx-20 p-6 border border-gray-600 bg-white/60 dark:bg-taublue/60 sm:rounded-mdform-input backdrop-blur-lg rounded-lg opacity-70 lg:opacity-90'
      >
        <div className='space-y-12'>
          <div className='pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
              Personal Information
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-3 form-input dark:bg-white/80 rounded-lg '>
                <label
                  htmlFor='fullName'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  Full name
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('fullName')}
                    name='fullName'
                    id='fullName'
                    placeholder='...'
                    // autoComplete="given-name"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  {/* <ErrorMessage>
                    {errors.fullName?.message}
                  </ErrorMessage> */}
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.fullName?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-3 form-input dark:bg-white/80 rounded-lg'>
                <label
                  htmlFor='street'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  Street address
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('street')}
                    name='street'
                    id='street'
                    placeholder='...'
                    // autoComplete="street-address"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.street?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-2 sm:col-start-1 form-input dark:bg-white/80 rounded-lg '>
                <label
                  htmlFor='city'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  City
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('city')}
                    name='city'
                    id='city'
                    placeholder='...'
                    // autoComplete="address-level2"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.city?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-2 form-input dark:bg-white/80 rounded-lg'>
                <label
                  htmlFor='state'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  State
                </label>
                <div className='mt-2'>
                  {/* <input
                          type="text"
                          // onChange={e => setAllStates(e.target.value)}
                          // value={allStates}
                          {...register("state")}
                          name="region"
                          id="region"
                          // autoComplete="address-level1"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        /> */}

                  <select
                    // type='text'
                    {...register('state')}
                    name='state'
                    id='state'
                    // autoComplete="address-level1"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  >
                    <option
                    // disabled selected value
                    >
                      ...
                    </option>
                    {statesData.map((state) => (
                      <option
                        key={state.isoCode}
                        value={state.isoCode}
                      >
                        {state.name} - {state.isoCode}
                      </option>
                    ))}
                  </select>

                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.state?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-2 form-input dark:bg-white/80 rounded-lg '>
                <label
                  htmlFor='zip'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  ZIP / Postal code
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('zip')}
                    name='zip'
                    id='zip'
                    placeholder='...'
                    // autoComplete="postal-code"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.zip?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-3 form-input dark:bg-white/80 rounded-lg'>
                <label
                  htmlFor='country'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  Country
                </label>
                <div className='mt-2'>
                  <select
                    // type='text'
                    id='country'
                    {...register('country')}
                    name='country'
                    // autoComplete="country-name"
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option
                    // disabled
                    // selected
                    // value=''
                    >
                      ...
                    </option>
                    <option value='United States'>United States</option>
                  </select>
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.country?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-3 form-input dark:bg-white/80 rounded-lg'>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  Email address
                </label>
                <div className='mt-2'>
                  <input
                    id='email'
                    {...register('email')}
                    name='email'
                    type='text'
                    autoComplete='email'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.email?.message}
                  </p>
                </div>
              </div>

              <div className='sm:col-span-2 form-input dark:bg-white/80 rounded-lg '>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  Phone number
                </label>
                <div className='mt-2'>
                  <input
                    type='text'
                    {...register('phone')}
                    name='phone'
                    id='phone'
                    placeholder='xxx-xxx-xxxx'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.phone?.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
              Tell us about yourself
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <div className='sm:col-span-2 rounded-lg'>
                <div className='mt-2 form-input dark:bg-white/80 rounded-lg'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Professional Title
                  </label>
                  <div className='mt-2 rounded-lg'>
                    <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      {/* <span className='flex select-none items-center text-gray-500 sm:text-sm'></span> */}
                      <input
                        type='text'
                        {...register('title')}
                        name='title'
                        id='title'
                        // autoComplete="username"
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                        placeholder='...'
                      />
                    </div>
                    <p className='text-red-600 font-bold dark:text-red-500'>
                      {errors.title?.message}
                    </p>
                  </div>
                </div>

                <div className='mt-10 form-input dark:bg-white/80 rounded-lg'>
                  <label
                    htmlFor='role'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Position you&apos;re interested in
                  </label>
                  <div className='mt-2 rounded-lg'>
                    <select
                      //   type='text'
                      id='role'
                      {...register('role')}
                      name='role'
                      // autoComplete="on"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option
                      //   disabled selected value=""
                      >
                        ...
                      </option>
                      <option value='contract administrator'>
                        Contract Administrator
                      </option>
                      {/* <option>Optics Engineer</option> */}
                      {/* <option>Systems Engineer</option> */}
                    </select>
                    <p className='text-red-600 font-bold dark:text-red-500'>
                      {errors.role?.message}
                    </p>
                  </div>
                </div>

                <div className='mt-10 form-input max-w-full dark:bg-white/80 rounded-lg'>
                  <label
                    htmlFor='experience'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Years of experience
                  </label>
                  <div className='mt-2 rounded-lg'>
                    {/* <div className='form-input dark:bg-white/50 rounded-lg'> */}
                    <select
                      // type='text'
                      id='experience'
                      {...register('experience')}
                      name='experience'
                      // autoComplete="exp-years"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option
                      // disabled
                      // selected
                      // value=''
                      >
                        ...
                      </option>
                      <option value='one to two'>1 - 2 years</option>
                      <option value='two to four'>2 - 4 years</option>
                      <option value='four to seven'>4 - 7 years</option>
                      <option value='more'>7 or more</option>
                    </select>
                    <p className='text-red-600 font-bold dark:text-red-500'>
                      {errors.experience?.message}
                    </p>
                    {/* </div> */}
                  </div>
                </div>
              </div>

              <div className='col-span-full form-input dark:bg-white/80 rounded-lg'>
                <label
                  htmlFor='about'
                  className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                >
                  About
                </label>
                <div className='mt-2 dark:bg-[#fff] rounded-lg'>
                  <textarea
                    // type='text'
                    id='about'
                    {...register('about')}
                    name='about'
                    rows={3}
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    defaultValue={''}
                  />
                  <p className='text-red-600 font-bold dark:text-red-500'>
                    {errors.about?.message}
                  </p>
                </div>
                <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-black'>
                  Write a few sentences about yourself.
                </p>
              </div>

              <div className='col-span-full'>
                <label
                  htmlFor='file'
                  className='block text-base font-medium leading-6 text-gray-900 dark:text-white'
                >
                  Resume
                </label>
                <div className='mt-2 flex items-center gap-x-3'></div>
              </div>

              <div className='col-span-full lg:col-span-2 form-input dark:bg-white/80 rounded-lg'>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <DocumentIcon
                      className='mx-auto h-12 w-12 text-gray-300 dark:text-indigo-600'
                      aria-hidden='true'
                    />
                    <div className='mt-4 flex text-sm leading-6 text-gray-600 dark:text-black'>
                      <label
                        htmlFor='filePath'
                        className='relative cursor-pointer rounded-md bg-white dark:bg-white/60 p-1 font-semibold text-taublue dark:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 dark:hover:text-indigo-400'
                      >
                        <span>Upload a file</span>
                        <input
                          // {...register("filePath")}
                          id='filePath'
                          name='filePath'
                          type='file'
                          className='sr-only'
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className='p-1'>or drag and drop</p>

                      {/* <div className='relative mt-2 rounded-md shadow-sm'>
                        <FileInput
                          onChange={handleFileChange}
                          // accept='.pdf,.doc,.docx,.txt'
                          className='block w-full text-gray-900 dark:text-black cursor-pointer'
                        />
                        <button
                          type='button'
                          onClick={openFileDialog}
                          className='mt-2 text-sm text-indigo-600 hover:text-indigo-500 dark:text-indigo-500 dark:hover:text-indigo-400'
                        >
                          Upload Resume
                          
                        </button>
                        {file && (
                          <p className='mt-2 text-sm text-green-600 dark:text-green-500'>
                            Resume uploaded successfully
                          </p>
                        )}
                        <span className='pl-1'>or drag and drop</span>
                        <p className='text-red-600 font-bold dark:text-red-500'>
                          {errors.filePath?.message}
                        </p>
                        
                      </div> */}
                    </div>
                    <p className='text-xs leading-5 text-gray-600 dark:text-black'>
                      .pdf, .doc, .dockx, .txt up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-white'>
              Notifications
            </h2>
            <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-white'>
              We&apos;ll reach out to meet with you, please choose your contact
              preference.
            </p>

            <div className='mt-10 space-y-10'>
              <fieldset>
                <legend className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'>
                  Preference
                </legend>
                <div className='mt-6 space-y-6'>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        type='checkbox'
                        {...register('notifyEmail')}
                        // defaultValue={''}
                        // value='option1'
                        // {...register('option1')}
                        // checked={selectedOptions.includes('option1')}
                        // onChange={handleCheckboxChange}
                        className='h-4 w-4 rounded border-gray-300 text-taublue dark:text-white focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='email-notification'
                        className='font-medium text-gray-900 dark:text-white'
                      >
                        Email
                      </label>
                      <p className='text-gray-500 dark:text-white'>
                        Get notified by email.
                      </p>
                    </div>
                  </div>
                  <div className='relative flex gap-x-3'>
                    <div className='flex h-6 items-center'>
                      <input
                        type='checkbox'
                        {...register('notifyPhone')}
                        // value='option2'
                        // {...register("option2")}
                        // checked={selectedOptions.includes('option2')}
                        // onChange={handleCheckboxChange}
                        className='h-4 w-4 rounded border-gray-300 text-taublue dark:text-black focus:ring-indigo-600'
                      />
                    </div>
                    <div className='text-sm leading-6'>
                      <label
                        htmlFor='phone-notification'
                        className='font-medium text-gray-900 dark:text-white'
                      >
                        Phone
                      </label>
                      <p className='text-gray-500 dark:text-white'>
                        Get notified by phone.
                      </p>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-end gap-x-6'>
          <button
            type='button'
            className='text-sm font-semibold leading-6 text-gray-900 dark:text-white'
          >
            <Link href='../careers'>Cancel</Link>
          </button>
          <button
            type='submit'
            className='rounded-md bg-taublue/70 dark:bg-white px-3 py-2 text-sm font-semibold text-white dark:text-taublue shadow-sm hover:bg-taublue dark:hover:bg-white/80 hover:text-white dark:hover:text-taublue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            // onClick={handleUpload}
          >
            Submit
            {/* <Link href='./thankyou'>Submit</Link> */}
          </button>
        </div>
      </form>
      {/* Spacer/Divider */}
      <div className='grid h-40 bg-transparent'></div>
    </div>
  );
};

export default ApplicationFormTwo;
