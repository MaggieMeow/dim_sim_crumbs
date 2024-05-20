import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

import "driver.js/dist/driver.css";

export default function App({ Component, pageProps }: AppProps) {
  const { push } = useRouter();
  return (
    <>
      <div className={``}>
        <Head>
          <title>Dim Sim Crumbs</title>
        </Head>

        <div className="pt-12 max-w-7xl mx-auto">
          <button
            id="nav-menu"
            className="fixed top-0 right-0"
            onClick={() => {
              push("/");
            }}
          >
            Menu
          </button>

          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
}
