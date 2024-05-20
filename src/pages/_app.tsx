import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Jost } from 'next/font/google';
import Head from 'next/head';
import Layout from '../components/layout';

const jost = Jost({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jost',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel='shortcut icon'
          href='/favicon.ico'
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
      </Head>
      {/* <main className={`app ${jost.className}`}> */}
      {/* <main className={`${jost.variable}`}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
      {/* </main> */}
    </>
  );
}
