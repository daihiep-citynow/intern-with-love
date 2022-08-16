import { useContext } from "react";

import { useLanguage } from "../../../../../hooks";
import styles from "./HeaderSubNav.module.scss";

export const HeaderSubNavLanguage = () => {
  const { setCurrentLanguage } = useContext(useLanguage.LanguageContext);
  const { languagesList } = useLanguage;

  const handleChangeLanguage = (language) => {
    setCurrentLanguage(language);
  };

  return (
    <div>
      {languagesList.map((languageKey) => (
        <div
          className={styles["header-sub-nav-language-item"]}
          key={languageKey}
          onClick={() => handleChangeLanguage(languageKey)}
          aria-hidden="true"
        >
          {languageKey}
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
