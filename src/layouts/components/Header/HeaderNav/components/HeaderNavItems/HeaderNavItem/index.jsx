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

const HeaderNavItem = ({ navLink }) => {
  const { currentLanguage } = useContext(useLocates.LanguageContext);
  const { languages } = useLocates;

  return (
    <Popover content={HeaderSubNav} placement="bottomLeft">
      <li className={styles["header-nav-item"]}>
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
