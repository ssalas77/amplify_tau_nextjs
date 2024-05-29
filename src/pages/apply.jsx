'use client';

import Head from 'next/head';
import PageHero from '../components/pageHero';
import ApplicationForm from '@/components/form';

export default function Apply() {

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
      <ApplicationForm />
    </>
  );
}
