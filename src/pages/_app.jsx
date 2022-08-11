import { useLanguage } from "../hooks";
import "antd/dist/antd.css";
import "./index.css";

const MyApp = ({ Component, pageProps }) => (
  <useLanguage.LanguageProvider>
    <Component {...pageProps} />
  </useLanguage.LanguageProvider>
);

export default MyApp;
