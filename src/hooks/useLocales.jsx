// libs
import { createContext, useMemo } from "react";
// hooks
import useLocalStorage from "./useLocalStorage";
// another
import languages from "../locales";

const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage("lang", "vi");

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
