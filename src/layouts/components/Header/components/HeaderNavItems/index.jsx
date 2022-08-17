// components
import HeaderNavItem from "./HeaderNavItem";
import HeaderSubNav from "../HeaderSubNav";
// another
import styles from "./HeaderNavItems.module.scss";
import HeaderNavLastItem from "./HeaderNavLastItem";

const navLinks = [
  {
    id: 1,
    titleKey: "songs",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 2,
    titleKey: "playlist",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 3,
    titleKey: "trendy",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 4,
    titleKey: "video",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 5,
    titleKey: "rank",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 6,
    titleKey: "topic",
    href: "/",
    subLinks: HeaderSubNav,
  },
  {
    id: 7,
    titleKey: "top",
    href: "/",
    subLinks: HeaderSubNav,
  },
];

const HeaderNavItems = () => (
  <ul className={styles["header-nav-items"]}>
    {navLinks.map((navLink) => (
      <HeaderNavItem key={navLink.id} navLink={navLink} />
    ))}
    <HeaderNavLastItem />
  </ul>
);

export default HeaderNavItems;
