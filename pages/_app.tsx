import '../public/css/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) 
{
  return (
    <>
      <Head>
        <title>{"OU Game Developer's Association"}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
