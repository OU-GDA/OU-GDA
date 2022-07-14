import type { AppProps } from 'next/app';

// Component Imports
import Head from 'next/head';
import NavBar from '../public/components/NavBar';

// Global CSS Style Sheets
import '../public/css/globals.css';
import '../public/css/gda-styles.css';

function MyApp({ Component, pageProps }: AppProps) 
{
  return (
    <>
      <Head>
        <title>{"OU Game Developer's Association"}</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width'/>
      </Head>

      <NavBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
