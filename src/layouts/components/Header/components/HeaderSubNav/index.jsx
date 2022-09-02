// libs
import { useContext } from "react";
// hooks

import { LocalesContext, localesList } from "@/hooks/useLocales";
// another
import styles from "./HeaderSubNav.module.scss";

export const HeaderSubNavLanguage = () => {
  const { setLocal } = useContext(LocalesContext);

  const handleChangeLanguage = (language) => {
    setLocal(language);
  };

  return (
    <div>
      {localesList.map((languageKey) => (
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
