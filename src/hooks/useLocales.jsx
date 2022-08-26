// libs
import { createContext, useMemo } from "react";
// hooks
import useLocalStorage from "./useLocalStorage";
// another
import locales from "../locales";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useLocalStorage("lang", "vi");

  const value = useMemo(
    () => ({ currentLanguage, setCurrentLanguage }),
    [currentLanguage, setCurrentLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const languages = locales;
export const languagesList = Object.keys(languages);
