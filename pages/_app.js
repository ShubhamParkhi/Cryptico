import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import DetailsProvider from "../context/DetailsContext.jsx";
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Cryptico</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#ffffff"></meta>
        <meta name="msapplication-TileColor" content="#2b5797" />
        <meta property="og:image" content="thumbnail.png" />
        <link rel="icon" href="favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>
      <DetailsProvider>
        <Component {...pageProps}/>
      </DetailsProvider>
      <Analytics />
    </Fragment>
  );
}

export default MyApp;
