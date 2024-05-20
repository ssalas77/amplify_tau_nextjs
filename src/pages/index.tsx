import Head from 'next/head';
import Hero from '../components/hero';
import Content from '../components/contentHero';

export default function Home() {
  return (
    <div className=''>
      <Head>
        <title>Tau Technologies</title>
        <meta
          name='description'
          content='Tau Technologies'
        />
      </Head>
      <Hero />
      <Content />
    </div>
  );
}
