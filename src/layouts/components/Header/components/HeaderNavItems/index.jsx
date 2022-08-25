// dataSource
import navLinks from "@/dataSources/header-nav";
// components
import HeaderNavItem from "../HeaderNavItem";
// another
import styles from "./HeaderNavItems.module.scss";
import HeaderNavLastItem from "../HeaderNavLastItem";

const HeaderNavItems = () => (
  <ul className={styles["header-nav-items"]}>
    {navLinks.map((_, index) => (
      <HeaderNavItem key={_.id} index={index} />
    ))}
    <HeaderNavLastItem />
  </ul>
);

export default HeaderNavItems;
