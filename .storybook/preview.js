import * as nextImage from "next/image";

import { useLanguage } from "../src/hooks";
import "antd/dist/antd.css";
import "../src/pages/index.css";

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
    <useLanguage.LanguageProvider>
      <Story />
    </useLanguage.LanguageProvider>
  ),
];
