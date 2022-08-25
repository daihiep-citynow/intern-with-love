// libs
import Head from "next/head";
// hooks
import { useLocales } from "../hooks";

// another
import "../styles/index.scss";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Code vui vẻ!</title>
    </Head>
    <useLocales.LanguageProvider>
      <Component {...pageProps} />
    </useLocales.LanguageProvider>
  </>
);

export default MyApp;
