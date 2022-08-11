import { useContext } from "react";
import Link from "next/link";
import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import classnames from "classnames";

import { useLanguage } from "../../../hooks";

import styles from "./HeaderNav.module.css";
import HeaderSubNav, { HeaderSubNavLanguage } from "./HeaderSubNav";

const navLinks = [
  {
    id: 1,
    title: "songs",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 2,
    title: "playlist",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 3,
    title: "trendy",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 4,
    title: "video",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 5,
    title: "rank",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 6,
    title: "topic",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 7,
    title: "top",
    href: "/",
    subLinks: HeaderSubNav,
  },
];

// eslint-disable-next-line no-unused-vars

const HeaderNav = () => {
  const { currentLanguage } = useContext(useLanguage.LanguageContext);
  const { languages } = useLanguage;

  return (
    <div className={styles["header-nav-wrapper"]}>
      <ul className={styles["header-nav-items"]}>
        {navLinks.map((navLink) => (
          <Popover key={navLink.id} content={HeaderSubNav} placement="bottomLeft">
            <li key={navLink.id} className={styles["header-nav-item"]}>
              <Link href={navLink.href}>
                <a className={styles["header-nav-link"]}>
                  {languages[currentLanguage][navLink.title]}
                </a>
              </Link>
            </li>
          </Popover>
        ))}
        <Popover content={HeaderSubNavLanguage} placement="bottom">
          <li className={classnames(styles["header-nav-item"], styles["header-nav-language"])}>
            <MoreOutlined />
          </li>
        </Popover>
      </ul>
    </div>
  );
};

export default HeaderNav;
