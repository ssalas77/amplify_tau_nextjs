'use client';

import Head from 'next/head';
import PageHero from '../components/pageHero';
import { DocumentIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useS3Upload } from 'next-s3-upload';
import { useRouter } from 'next/navigation';
import statesData from '../assets/data/statesData';

export default function Apply() {
  const router = useRouter();
  let { uploadToS3 } = useS3Upload();

  let handleFileChange = async (event) => {
    let file = event.target.files[0];
    let { url } = await uploadToS3(file);

    console.log('successfully uploaded to S3!');
  };

  const onSubmit = () => {
    router.push('/thankyou');
  };

  return (
    <>
      <Head>
        <title>Apply - Tau Technologies</title>
        <meta
          name='description'
          content='Apply'
        />
      </Head>

      <PageHero
        heading='Apply'
        message=''
      />

      <div className=' grid min-h-screen'>
        <div className='grid grid-cols-6 grid-rows-1 gap-4'>
          <div className=' row-start-1 col-span-4 col-start-2 lg:col-span-1 lg:col-start-1'></div>
        </div>

        <form
          //   onSubmit={handleSubmit(onSubmit)}
          onSubmit={onSubmit}
          className=' mx-3 lg:mx-20 p-6 border border-gray-600 bg-white/50 sm:rounded-mdform-input backdrop-blur-lg rounded-lg opacity-70 lg:opacity-90 '
        >
          <div className='space-y-12'>
            <div className='pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
                Personal Information
              </h2>
              {/* <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p> */}

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-3 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg '>
                  <label
                    htmlFor='full-name'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Full name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      // {...register("fullName")}
                      name='fullName'
                      id='fullName'
                      // autoComplete="given-name"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.fullName?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-3 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                  <label
                    htmlFor='street-address'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Street address
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      // {...register("street")}
                      name='street-address'
                      id='street-address'
                      // autoComplete="street-address"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.street?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-2 sm:col-start-1 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg '>
                  <label
                    htmlFor='city'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    City
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      // {...register("city")}
                      name='city'
                      id='city'
                      // autoComplete="address-level2"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.city?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-2 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                  <label
                    htmlFor='region'
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
                      type='text'
                      // {...register("state")}
                      name='region'
                      id='region'
                      // autoComplete="address-level1"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    >
                      <option
                      // disabled selected value
                      >
                        ...
                      </option>
                      {statesData.map((state) => {
                        return (
                          <option
                            key={state.name}
                            value=''
                          >
                            {state.name} - {state.isoCode}
                          </option>
                        );
                      })}
                    </select>

                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.state?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-2 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg '>
                  <label
                    htmlFor='postal-code'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    ZIP / Postal code
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      // {...register("zip")}
                      name='postal-code'
                      id='postal-code'
                      // autoComplete="postal-code"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.zip?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-3 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                  <label
                    htmlFor='country'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Country
                  </label>
                  <div className='mt-2'>
                    <select
                      type='text'
                      id='country'
                      // {...register("country")}
                      name='country'
                      // autoComplete="country-name"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                    >
                      <option
                      // disabled selected value=""
                      >
                        ...
                      </option>
                      <option
                      // value="United States"
                      >
                        United States
                      </option>
                    </select>
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.country?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-3 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      // {...register("email")}
                      name='email'
                      type='text'
                      // autoComplete="email"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.email?.message}
                      </p> */}
                  </div>
                </div>

                <div className='sm:col-span-2 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg '>
                  <label
                    htmlFor='tel'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Phone number
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      // {...register("phone")}
                      name='tel'
                      id='tel'
                      // autoComplete="postal-code"
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                    />
                    {/* <p className="text-red-600 font-bold dark:text-red-500">
                        {errors.phone?.message}
                      </p> */}
                  </div>
                </div>
              </div>
            </div>
            <div className='border-b border-gray-900/10 pb-12'>
              <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
                Tell us about yourself
              </h2>

              <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                <div className='sm:col-span-4'>
                  <label
                    htmlFor='title'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Professional Title
                  </label>
                  <div className='mt-2 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                    <div className='flex rounded-md dark:bg-white/50 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md'>
                      <span className='flex select-none items-center pl-3 text-gray-500 sm:text-sm'></span>
                      <input
                        type='text'
                        //   {...register("title")}
                        name='username'
                        id='username'
                        // autoComplete="username"
                        className='block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 dark:text-black placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                        placeholder='...'
                      />
                    </div>
                  </div>
                  <div className='mt-2'>
                    <label
                      htmlFor='title'
                      className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                    >
                      Role you&apos;re interested in
                    </label>
                    <div className='mt-2 form-input dark:bg-white/50 backdrop-blur-lg rounded-lg'>
                      <select
                        type='text'
                        id='role'
                        //   {...register("role")}
                        name='role'
                        // autoComplete="on"
                        className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                      >
                        <option
                        //   disabled selected value=""
                        >
                          ...
                        </option>
                        <option
                        //   value="contract administrator"
                        >
                          Contract Administrator
                        </option>
                        {/* <option>Optics Engineer</option> */}
                        {/* <option>Systems Engineer</option> */}
                      </select>
                    </div>
                  </div>
                  <div className='mt-2'>
                    <label
                      htmlFor='title'
                      className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                    >
                      Years of experience
                    </label>
                    <div className='mt-2'>
                      <div className='form-input dark:bg-white/50 rounded-lg'>
                        <select
                          type='text'
                          id='experience'
                          // {...register("experience")}
                          name='experience'
                          // autoComplete="exp-years"
                          className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6'
                        >
                          <option
                          // disabled selected value=""
                          >
                            ...
                          </option>
                          <option
                          // value="one to two"
                          >
                            1 - 2 years
                          </option>
                          <option
                          // value="two to four"
                          >
                            2 - 4 years
                          </option>
                          <option
                          // value="four to seven"
                          >
                            4 - 7 years
                          </option>
                          <option
                          // value="more"
                          >
                            7 or more
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='about'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    About
                  </label>
                  <div className='mt-2 form-input dark:bg-white/50 rounded-lg'>
                    <textarea
                      type='text'
                      id='about'
                      // {...register("about")}
                      name='about'
                      rows={3}
                      className='block w-full rounded-md border-0 py-1.5 text-gray-900 dark:text-black shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      defaultValue={''}
                    />
                  </div>
                  <p className='mt-3 text-sm leading-6 text-gray-600 dark:text-black'>
                    Write a few sentences about yourself.
                  </p>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='photo'
                    className='block text-sm font-medium leading-6 text-gray-900 dark:text-black'
                  >
                    Resume
                  </label>
                  <div className='mt-2 flex items-center gap-x-3'></div>
                </div>

                <div className='col-span-full lg:col-span-2 form-input dark:bg-white/50 rounded-lg'>
                  <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                    <div className='text-center'>
                      <DocumentIcon
                        className='mx-auto h-12 w-12 text-gray-300 dark:text-indigo-600'
                        aria-hidden='true'
                      />
                      <div className='mt-4 flex text-sm leading-6 text-gray-600 dark:text-black'>
                        <label
                          htmlFor='file-upload'
                          className='relative cursor-pointer rounded-md bg-white dark:bg-slate-200 font-semibold text-taublue dark:text-black focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500 dark:hover:text-indigo-400'
                        >
                          <span>Upload a file</span>
                          <input
                            //   {...register("file")}
                            id='file-upload'
                            name='file-upload'
                            type='file'
                            className='sr-only'
                            onChange={handleFileChange}
                          />
                        </label>
                        <p className='pl-1'>or drag and drop</p>
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
              <h2 className='text-base font-semibold leading-7 text-gray-900 dark:text-black'>
                Notifications
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-600 dark:text-black'>
                We&apos;ll reach out to meet with you, please choose your
                contact preference.
              </p>

              <div className='mt-10 space-y-10'>
                <fieldset>
                  <legend className='text-sm font-semibold leading-6 text-gray-900 dark:text-black'>
                    Preference
                  </legend>
                  <div className='mt-6 space-y-6'>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          type='checkbox'
                          name='option1'
                          //   value="option1"
                          //   {...register("option1")}
                          //   onChange={handleCheckboxChange}
                          //   checked={selectedOptions.includes('option1')}
                          className='h-4 w-4 rounded border-gray-300 text-taublue dark:text-black focus:ring-indigo-600'
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='comments'
                          className='font-medium text-gray-900 dark:text-black'
                        >
                          Email
                        </label>
                        <p className='text-gray-500 dark:text-black'>
                          Get notified by email.
                        </p>
                      </div>
                    </div>
                    <div className='relative flex gap-x-3'>
                      <div className='flex h-6 items-center'>
                        <input
                          type='checkbox'
                          name='option2'
                          // value="option2"
                          // {...register("option2")}
                          // onChange={handleCheckboxChange}
                          // checked={selectedOptions.includes('option2')}
                          className='h-4 w-4 rounded border-gray-300 text-taublue dark:text-black focus:ring-indigo-600'
                        />
                      </div>
                      <div className='text-sm leading-6'>
                        <label
                          htmlFor='notification'
                          className='font-medium text-gray-900 dark:text-black'
                        >
                          Phone
                        </label>
                        <p className='text-gray-500 dark:text-black'>
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
              className='text-sm font-semibold leading-6 text-gray-900 dark:text-black'
            >
              <Link href='../careers'>Cancel</Link>
            </button>
            <button
              type='submit'
              className='rounded-md bg-taublue dark:bg-slate-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/50 dark:hover:bg-white/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
            >
              <Link href='./thankyou'>Submit</Link>
            </button>
          </div>
        </form>
        {/* Spacer/Divider */}
        <div className='grid h-40 bg-transparent'></div>
      </div>
    </>
  );
}
