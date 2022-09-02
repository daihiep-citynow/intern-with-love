// libs
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Popover } from "antd";
// dataSource
import data from "@/dataSources/header-nav";
// hooks
import { LocalesContext } from "@/hooks/useLocales";
// components
import HeaderSubNav from "../HeaderSubNav";
// another
import styles from "./HeaderNavItem.module.scss";

const HeaderNavItem = ({ index }) => {
  const [local, setLocal] = useState([]);
  const { languages } = useContext(LocalesContext);

  useEffect(() => {
    setLocal(languages);
  }, [languages]);

  return (
    <Popover content={HeaderSubNav} placement="bottomLeft">
      <li className={styles["header-nav-item"]}>
        <Link href={data[index].href}>
          <a className={styles["header-nav-link"]}>{local[data[index].titleKey]}</a>
        </Link>
      </li>
    </Popover>
  );
};

export default HeaderNavItem;
