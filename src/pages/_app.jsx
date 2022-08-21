// libraries
import axios from "axios";

// hooks
import { useLocates } from "../hooks";

// another
import "../styles/index.scss";
import "antd/dist/antd.css";

axios.defaults.baseURL = "https://intern-with-love.daihiep.co/";

const MyApp = ({ Component, pageProps }) => (
  <useLocates.LanguageProvider>
    <Component {...pageProps} />
  </useLocates.LanguageProvider>
);

export default MyApp;
