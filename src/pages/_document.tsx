import { Html, Head, Main, NextScript } from 'next/document';
import { Providers } from '@/components/providers';

export default function Document() {
  return (
    <Html
      lang='en'
      suppressHydrationWarning
    >
      <link
        rel='manifest'
        href='/site.webmanifest'
      />
      <Head />
      <body className='bg-page dark:bg-darkPage'>
        <Providers>
          <Main />
          <NextScript />
        </Providers>
      </body>
    </Html>
  );
}
