// libs
import { Provider } from "react-redux";
import Head from "next/head";
// store
import store from "@/stores";
// hooks
import { LanguageProvider } from "../hooks/useLocales";
// another
import "../styles/index.scss";
import "antd/dist/antd.css";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Code vui vẻ!</title>
    </Head>
    <Provider store={store}>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </Provider>
  </>
);

export default MyApp;
