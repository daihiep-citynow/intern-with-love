// libraries
import { useContext } from "react";
import Link from "next/link";
import { Popover } from "antd";
// hooks
import { useLocates } from "@/hooks";
// components
import HeaderSubNav from "../../HeaderSubNav";
// another
import styles from "./HeaderNavItem.module.scss";

const HeaderNavItem = ({ key, navLink }) => {
  const { currentLanguage } = useContext(useLocates.LanguageContext);
  const { languages } = useLocates;

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
