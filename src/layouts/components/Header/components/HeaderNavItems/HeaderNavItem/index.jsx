// libraries
import { useContext } from "react";
import Link from "next/link";
import { Popover } from "antd";
// hooks
import { useLanguage } from "@/hooks";
// components
import HeaderSubNav from "../../HeaderSubNav";
// another
import styles from "./HeaderNavItem.module.scss";

const HeaderNavItem = ({ key, navLink }) => {
  const { currentLanguage } = useContext(useLanguage.LanguageContext);
  const { languages } = useLanguage;

  return (
    <Popover key={key} content={HeaderSubNav} placement="bottomLeft">
      <li key={key} className={styles["header-nav-item"]}>
        <Link href={navLink.href}>
          <a className={styles["header-nav-link"]}>
            {languages[currentLanguage][navLink.titleKey]}
          </a>
        </Link>
      </li>
    </Popover>
  );
};

export default HeaderNavItem;
