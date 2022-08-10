import Link from "next/link";
import { Popover } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import classnames from "classnames";

import HeaderSubNav, { HeaderSubNavLanguage } from "./HeaderSubNav";
import styles from "./HeaderNav.module.css";

const navLinks = [
  {
    id: 1,
    title: "Bài Hát",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 2,
    title: "Playlist",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 3,
    title: "Tuyển Tập",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 4,
    title: "Video",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 5,
    title: "BXH",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 6,
    title: "Chủ Đề",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 7,
    title: "Top 100",
    href: "/",
    subLinks: HeaderSubNav,
  },
];

const HeaderNav = () => (
  <div className={styles["header-nav-wrapper"]}>
    <ul className={styles["header-nav-items"]}>
      {navLinks.map((navLink) => (
        <Popover key={navLink.id} content={HeaderSubNav} placement="bottomLeft">
          <li key={navLink.id} className={styles["header-nav-item"]}>
            <Link href={navLink.href}>
              <a className={styles["header-nav-link"]}>{navLink.title}</a>
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

export default HeaderNav;
