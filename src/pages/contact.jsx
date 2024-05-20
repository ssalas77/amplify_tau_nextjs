import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { tauMap } from '../assets';
import PageHero from '../components/pageHero';
import Link from 'next/link';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Tau Technologies</title>
        <meta
          name='description'
          content='Contact'
        />
      </Head>
      <PageHero
        heading='Contact'
        message=''
      />

      <div className=' flex min-h-screen flex-col items-center justify-between p-2'>
        <div className=' mx-auto mt-5 lg:mt-0 max-w-7xl px-6 lg:px-2 grid grid-cols-1'>
          <h1 className=' text-center text-3xl lg:text-4xl col-span-1 mb-5 lg:mb-10 font-bold tracking-tight lg:leading-8 text-black dark:text-white'>
            Tau Technologies
          </h1>
          <h1 className=' text-center lg:text-justify lg:indent-10 text-base lg:text-lg col-span-1 mb-0 lg:mb-20 font-semibold tracking-tight lg:leading-8 text-black dark:text-white'>
            Location:
            <span className=' mt-2 ml-2 text-base lg:text-lg text-center lg:indent-0 lg:text-justify font-medium leading-6  text-black dark:text-white'>
              Our office is one mile from Albuquerque International Airport, on
              the northeast corner of Randolph Road and University Boulevard.
            </span>
          </h1>

          <div className=' mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10'>
            <div className=' text-justify lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8'>
              <div className=' lg:pr-4 '>
                <div className=' glass py-0.5 lg:max-w-lg '>
                  <h1 className=' mt-10 text-lg lg:text-2xl text-center font-semibold tracking-tight text-black dark:text-white'>
                    Physical Address
                  </h1>
                  <Link href=' '>
                    <p className='mt-6 text-base text-center leading-8 text-black dark:text-white'>
                      1601 Randolph Rd SE #100n
                      <br />
                      Albuquerque, NM 87121
                    </p>
                  </Link>

                  <h1 className=' mt-10 lg:mt-20 text-lg lg:text-2xl text-center font-semibold tracking-tight text-black dark:text-white'>
                    Mailing Address
                  </h1>
                  {/* <Link> */}
                  <p className='mt-6 text-base text-center leading-8 text-black dark:text-white'>
                    Tau Technologies LLC
                    <br />
                    PO Box 9334
                    <br />
                    Albuquerque, NM 87119
                  </p>
                  <h1 className=' mt-10 lg:mt-20 text-lg lg:text-2xl text-center font-semibold tracking-tight text-black dark:text-white'>
                    Phone{' '}
                    <span className='font-normal text-black dark:text-white px-4'>
                      |
                    </span>{' '}
                    Email
                  </h1>
                  <p className=' mt-6 text-base text-center leading-8 text-black dark:text-white mb-2'>
                    <Link href='tel:+1-505-244-1222'>505.244.1222</Link>
                  </p>
                  <p className=' text-base text-center leading-8 text-black dark:text-white mb-10'>
                    <Link href='mailto:info@tautechnologies.com'>
                      info@tautechnologies.com
                    </Link>
                  </p>
                </div>
              </div>
            </div>
            <div className=' row-start-2 -mt-12 lg:mt-8 mx-5 lg:p-10 lg:sticky lg:col-start-2 lg:row-start-1'>
              <Image
                className=' mb-20 object-center border-solid border-2 border-gray-300 rounded-xl drop-shadow-xl'
                src={tauMap}
                alt='tau map location'
                width={497}
                height={497}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
