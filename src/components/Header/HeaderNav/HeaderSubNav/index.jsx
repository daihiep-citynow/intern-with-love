import { useContext, useMemo } from "react";

import { useLanguage } from "../../../../hooks";

import styles from "./HeaderSubNav.module.css";

export const HeaderSubNavLanguage = () => {
  // eslint-disable-next-line no-unused-vars
  const { currentLanguage, setCurrentLanguage } = useContext(useLanguage.LanguageContext);
  const { languages } = useLanguage;

  // get all key in languages
  const languageKeys = useMemo(() => Object.keys(languages), [languages]);

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div>
      {languageKeys.map((languageKey) => (
        <div
          className={styles["header-sub-nav-language-item"]}
          key={languageKey}
          onClick={() => handleChangeLanguage(languageKey)}
          aria-hidden="true"
        >
          {languages[languageKey].title}
        </div>
      ))}
    </div>
  );
};

const HeaderSubNav = () => (
  <div>
    <div>Content</div>
    <div>Content</div>
  </div>
);

export default HeaderSubNav;
