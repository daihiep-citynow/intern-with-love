import { useState, createContext, useMemo } from "react";

import languages from "../locates";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => Object.keys(languages)[0] || "en");

  const value = useMemo(
    () => ({ currentLanguage, setCurrentLanguage }),
    [currentLanguage, setCurrentLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default {
  LanguageContext,
  LanguageProvider,
  languages,
  languagesList: Object.keys(languages),
};
