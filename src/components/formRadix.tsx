'use client';

import { Callout, Flex } from '@radix-ui/themes';
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from '@radix-ui/react-form';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/validationSchema';
import { z } from 'zod';
import { useState } from 'react';
import statesData from '@/assets/data/statesData';
import { DocumentIcon } from '@heroicons/react/24/solid';

type ApplyForm = z.infer<typeof formSchema>;

const ApplicationForm = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyForm>({
    resolver: zodResolver(formSchema),
  });

  const [error, setError] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = async (data: ApplyForm) => {
    try {
      setSubmitting(true);
      await axios.post('/api/submit', data);
      router.push('/thankyou');
    } catch (error) {
      setSubmitting(false);
      setError('An unexpected error occurred.');
    }
  };

  return (
    <div className=' grid min-h-screen'>
      <div className='grid grid-cols-6 grid-rows-1 gap-4'>
        <div className=' row-start-1 col-span-4 col-start-2 lg:col-span-1 lg:col-start-1'></div>
      </div>
      {error && (
        <Callout.Root
          color='red'
          className='mt-5'
        >
          <Callout.Icon>
            <InfoCircledIcon />
          </Callout.Icon>
          <Callout.Text>{error}</Callout.Text>
        </Callout.Root>
      )}
      {/* <form
        className='mx-3 lg:mx-20 p-6 border border-gray-600 bg-white/50 sm:rounded-mdform-input backdrop-blur-lg rounded-lg opacity-70 lg:opacity-90'
        onSubmit={onSubmit}
      >
        <div className='space-y-12'>
          <div className='pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
              Personal Information
            </h2>
            <TextField.Root></TextField.Root>
            <div>
                <div>
                    <label>
                        Full name
                    </label>
                </div>
            </div>
          </div>
        </div>
      </form> */}

      {/* <form onSubmit={handleSubmit(onSubmit)} className='mx-3 lg:mx-20 p-6 border border-gray-600 bg-white/50 sm:rounded-md backdrop-blur-lg rounded-lg opacity-70 lg:opacity-90'> */}

      <Form
        onSubmit={handleSubmit(onSubmit)}
        className='mx-3 lg:mx-20 p-6 border border-gray-600 bg-white/50 sm:rounded-md backdrop-blur-lg rounded-lg opacity-70 lg:opacity-90'
      >
        <div className='space-y-12'>
          <div className='pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
              Personal Information
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <FormField
                name='fullName'
                className='sm:col-span-3'
              >
                <FormLabel htmlFor='fullName'>Full name</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('fullName')}
                    id='fullName'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.fullName?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='street'
                className='sm:col-span-3'
              >
                <FormLabel htmlFor='street'>Street address</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('street')}
                    id='street'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.street?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='city'
                className='sm:col-span-2 sm:col-start-1'
              >
                <FormLabel htmlFor='city'>City</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('city')}
                    id='city'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.city?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='state'
                className='sm:col-span-2'
              >
                <FormLabel htmlFor='state'>State</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <select
                    {...register('state')}
                    id='state'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  >
                    <option>...</option>
                    {statesData.map((state) => (
                      <option
                        key={state.isoCode}
                        value={state.isoCode}
                      >
                        {state.name} - {state.isoCode}
                      </option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.state?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='zip'
                className='sm:col-span-2'
              >
                <FormLabel htmlFor='zip'>ZIP / Postal code</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('zip')}
                    id='zip'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.zip?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='country'
                className='sm:col-span-3'
              >
                <FormLabel htmlFor='country'>Country</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <select
                    {...register('country')}
                    id='country'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>...</option>
                    <option value='United States'>United States</option>
                  </select>
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.country?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='email'
                className='sm:col-span-3'
              >
                <FormLabel htmlFor='email'>Email address</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('email')}
                    id='email'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.email?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='phone'
                className='sm:col-span-2'
              >
                <FormLabel htmlFor='phone'>Phone number</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('phone')}
                    id='phone'
                    placeholder='xxx-xxx-xxxx'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.phone?.message}
                </FormMessage>
              </FormField>
            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
              Tell us about yourself
            </h2>

            <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
              <FormField
                name='title'
                className='sm:col-span-4'
              >
                <FormLabel htmlFor='title'>Professional Title</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <input
                    type='text'
                    {...register('title')}
                    id='title'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.title?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='role'
                className='sm:col-span-4'
              >
                <FormLabel htmlFor='role'>Role</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  {/* <input
                    type='text'
                    {...register('role')}
                    id='role'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  /> */}
                  <select
                    {...register('role')}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>...</option>
                    <option value='contract administrator'>
                      Contract Administrator
                    </option>
                  </select>
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.role?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='experience'
                className='sm:col-span-4'
              >
                <FormLabel htmlFor='experience'>Experience</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  {/* <input
                    type='text'
                    {...register('experience')}
                    id='experience'
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  /> */}
                  <select
                    {...register('experience')}
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                  >
                    <option>...</option>
                    <option value='one to two'>1 - 2 years</option>
                    <option value='two to four'>2 - 4 years</option>
                    <option value='four to seven'>4 - 7 years</option>
                    <option value='more'>7 or more</option>
                  </select>
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.experience?.message}
                </FormMessage>
              </FormField>

              <FormField
                name='about'
                className='col-span-full'
              >
                <FormLabel htmlFor='about'>About</FormLabel>
                <div className='mt-2 flex items-center gap-x-3'></div>
                <FormControl asChild>
                  <textarea
                    {...register('about')}
                    id='about'
                    //   rows="3"
                    placeholder='...'
                    className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                  />
                </FormControl>
                <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                  {errors.about?.message}
                </FormMessage>
              </FormField>
              
              <div className='col-span-full lg:col-span-2 form-input rounded-lg'>
                <div className='mt-2 flex justify-center rounded-lg border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <div className='mt-4 flex text-sm leading-6 text-gray-600 dark:text-black'>
                      <FormField
                        name='file'
                        className='col-span-full lg:col-span-2 form-input'
                      >
                        <FormLabel
                          htmlFor='filePath'
                          //   className='block font-medium leading-6'
                        >
                          Resume
                        </FormLabel>
                        <div className='mt-2 flex items-center gap-x-3'></div>
                        <DocumentIcon
                          className='mx-auto h-12 w-12 text-gray-300 dark:text-indigo-600'
                          aria-hidden='true'
                        />
                        <span>Upload a file</span>
                        <FormControl asChild>
                          <input
                            type='file'
                            {...register('filePath')}
                            id='filePath'
                            className='block w-fit text-gray-900 dark:text-black ring-1 ring-inset ring-gray-300 file:border-0 file:bg-transparent file:mr-4 file:py-1.5 file:px-4 file:text-sm file:font-semibold file:text-gray-900 hover:file:bg-gray-100'
                          />
                        </FormControl>
                        <p className='pl-1'>or drag and drop</p>
                        <p className='text-xs leading-5 text-gray-600 dark:text-black'>
                          .pdf, .doc, .dockx, .txt up to 10MB
                        </p>
                        <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                        </FormMessage>
                      </FormField>
                    </div>
                  </div>
                </div>
              </div>
              {/* End of resume */}

            </div>
          </div>

          <div className='border-b border-gray-900/10 pb-12'>
            <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
              Notifications
            </h2>

            <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-gray-700'>
              We&apos;ll reach out to meet with you, please choose your contact
              preference.
            </p>

            <div className='mt-10 space-y-10'>
              <FormField name='notifyEmail'>
                <Flex
                  as='div'
                  display='flex'
                  gapX='3'
                >
                  <FormControl asChild>
                    <input
                      type='checkbox'
                      {...register('notifyEmail')}
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor='email-notification'
                    className='text-sm ml-4 font-semibold leading-6 text-gray-900 dark:text-black'
                  >
                    Email
                  </FormLabel>
                  <p className='text-gray-500 dark:text-black'>
                    Get notified by email
                  </p>
                  <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                    {errors.notifyEmail?.message}
                  </FormMessage>
                </Flex>
              </FormField>

              <FormField name='notifyPhone'>
                <Flex
                  as='div'
                  display='flex'
                  gapX='3'
                >
                  <FormControl asChild>
                    <input
                      type='checkbox'
                      {...register('notifyPhone')}
                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                    />
                  </FormControl>
                  <FormLabel
                    htmlFor='phone-notification'
                    className='text-sm ml-4 font-semibold leading-6 text-gray-900 dark:text-black'
                  >
                    Phone
                  </FormLabel>
                  <p className='text-gray-500 dark:text-black'>
                    Get notified by phone
                  </p>
                  <FormMessage className='text-red-600 font-bold dark:text-red-500'>
                    {errors.notifyPhone?.message}
                  </FormMessage>
                </Flex>
              </FormField>
            </div>
          </div>

          <div className='mt-6 flex items-center justify-end gap-x-6'>
            <button
              type='button'
              className='text-sm font-semibold leading-6 text-gray-900 dark:text-black'
            >
              Cancel
            </button>
            <button
              type='submit'
              className='rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              Save
            </button>
          </div>
        </div>
      </Form>
      <div className='grid h-40 bg-transparent'></div>
      {/* </form> */}
    </div>
  );
};

export default ApplicationForm;
