import { Provider } from "react-redux";
import * as nextImage from "next/image";

import store from "@/stores";
import { LanguageProvider } from "../src/hooks/useLocales";
import "antd/dist/antd.css";
import "../src/styles/index.scss";

Object.defineProperty(nextImage, "default", {
  configurable: true,
  value: (props) => <img {...props} />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <LanguageProvider>
        <Story />
      </LanguageProvider>
    </Provider>
  ),
];
