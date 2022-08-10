import Link from "next/link";
import { Popover } from "antd";

import styles from "./HeaderNav.module.css";

const Content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const navLinks = [
  {
    id: 1,
    title: "Bài Hát",
    href: "/",
    subLinks: Content,
  },
  {
    id: 2,
    title: "Playlist",
    href: "/",
    subLinks: Content,
  },
  {
    id: 3,
    title: "Tuyển Tập",
    href: "/",
    subLinks: Content,
  },
  {
    id: 4,
    title: "Video",
    href: "/",
    subLinks: Content,
  },
  {
    id: 5,
    title: "BXH",
    href: "/",
    subLinks: Content,
  },
  {
    id: 6,
    title: "Chủ Đề",
    href: "/",
    subLinks: Content,
  },
  {
    id: 7,
    title: "Top 100",
    href: "/",
    subLinks: Content,
  },
];

const HeaderNav = () => (
  <div className={styles["header-nav-wrapper"]}>
    <ul className={styles["header-nav-items"]}>
      {navLinks.map((navLink) => (
        <Popover key={navLink.id} content={Content} placement="bottomLeft">
          <li key={navLink.id} className={styles["header-nav-item"]}>
            <Link href={navLink.href}>
              <a className={styles["header-nav-link"]}>{navLink.title}</a>
            </Link>
          </li>
        </Popover>
      ))}
      <li className={styles["header-nav-item"]}>
        <span>***</span>
      </li>
    </ul>
  </div>
);

export default HeaderNav;
