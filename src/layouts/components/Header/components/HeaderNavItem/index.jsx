// libs
import { useContext } from "react";
import Link from "next/link";
import { Popover } from "antd";
// dataSource
import data from "@/dataSources/header-nav/header-nav-item";
// hooks
import { useLocales } from "@/hooks";
// components
import HeaderSubNav from "../HeaderSubNav";
// another
import styles from "./HeaderNavItem.module.scss";

const HeaderNavItem = ({ index }) => {
  const { currentLanguage } = useContext(useLocales.LanguageContext);
  const { languages } = useLocales;

  return (
    <Popover content={HeaderSubNav} placement="bottomLeft">
      <li className={styles["header-nav-item"]}>
        <Link href={data[index].href}>
          <a className={styles["header-nav-link"]}>
            {languages[currentLanguage][data[index].titleKey]}
          </a>
        </Link>
      </li>
    </Popover>
  );
};

export default HeaderNavItem;
