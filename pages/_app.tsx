import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {useEffect} from 'react';

export default function App({Component, pageProps}: AppProps) {
  return (
    <>
      <div className={``}>
        <Head>
          <title>hahahah</title>
        </Head>

        <div className="pt-12 max-w-7xl mx-auto">
          <button className="fixed top-0 right-0">Menu</button>

          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
