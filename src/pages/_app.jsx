// libraries
import axios from "axios";

// hooks
import { useLanguage } from "../hooks";

// another
import "../styles/index.scss";
import "antd/dist/antd.css";

axios.defaults.baseURL = "https://intern-with-love.daihiep.co/";

const MyApp = ({ Component, pageProps }) => (
  <useLanguage.LanguageProvider>
    <Component {...pageProps} />
  </useLanguage.LanguageProvider>
);

export default MyApp;
