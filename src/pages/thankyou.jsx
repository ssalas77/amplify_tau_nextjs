/** @thankyou page */

'use client';

import React from 'react';
import Head from 'next/head';

export default function Thanks() {
  return (
    <>
      <Head>
        <title>Thank you - Tau Technologies</title>
        <meta
          name='description'
          content='Thank you'
        />
      </Head>
      <div className='grid min-h-screen'>
        <div className='grid grid-rows-4 grid-cols-4 gap-2 lg:gap-20 max-w-7xl lg:max-w-full p-5'>
          <h2 className='row-start-3 col-span-4 text-center text-4xl font-semibold tracking-tight lg:text-7xl text-taublue dark:text-white'>
            Thank you!
          </h2>
          <p className='row-start-4 col-span-4 text-center mt-10 lg:mt-0 font-semibold text-base leading-8 lg:text-3xl lg:px-24'>
            We look forward to meeting you
          </p>
        </div>
        <div className='h-40 bg-transparent'></div>
      </div>
    </>
  );
}
