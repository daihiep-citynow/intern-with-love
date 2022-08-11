import axios from "axios";

import { useLanguage } from "../hooks";
import "antd/dist/antd.css";
import "./index.css";

axios.defaults.baseURL = "https://intern-with-love.daihiep.co/";

const MyApp = ({ Component, pageProps }) => (
  <useLanguage.LanguageProvider>
    <Component {...pageProps} />
  </useLanguage.LanguageProvider>
);

export default MyApp;
