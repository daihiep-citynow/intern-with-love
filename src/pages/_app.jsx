// libs
import Head from "next/head";
import { Provider } from "react-redux";
// store
import store from "@/stores";
// hooks
import { LanguageProvider } from "../hooks/useLocales";
// another
import "antd/dist/antd.css";
import "../styles/index.scss";

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
