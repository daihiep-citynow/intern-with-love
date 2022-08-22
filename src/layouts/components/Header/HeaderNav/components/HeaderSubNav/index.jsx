// libs
import { useContext } from "react";
// hooks
import { useLocates } from "@/hooks";
// another
import styles from "./HeaderSubNav.module.scss";

export const HeaderSubNavLanguage = () => {
  const { setCurrentLanguage } = useContext(useLocates.LanguageContext);
  const { languagesList } = useLocates;

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
