import { useState, createContext, useMemo } from "react";

import languages from "../languages/languages.json";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const value = useMemo(() => ({ language, setLanguage }), [language, setLanguage]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default { LanguageContext, LanguageProvider, languages };
