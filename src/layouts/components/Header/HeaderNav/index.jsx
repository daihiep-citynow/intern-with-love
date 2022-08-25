// components
import HeaderNavItems from "../components/HeaderNavItems";
// another
import styles from "./HeaderNav.module.scss";

const HeaderNav = () => (
  <div className={styles["header-nav-wrapper"]}>
    <HeaderNavItems />
  </div>
);
export default HeaderNav;
