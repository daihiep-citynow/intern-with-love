// components
import HeaderLogo from "./HeaderLogo";
import HeaderBeta from "./HeaderBeta";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderButton from "./HeaderButton";
import HeaderLogin from "./HeaderLogin";
// another
import styles from "./Header.module.scss";

const Header = () => (
  <header className="header-wrapper">
    <div className={styles["header-wrapper-inner"]}>
      <div className={styles["header-wrapper-left"]}>
        <HeaderLogo />
        <HeaderBeta />
        <HeaderNav />
      </div>
      <div className={styles["header-wrapper-right"]}>
        <HeaderSearch />
        <HeaderButton />
        <div className={styles["header-divider"]} />
        <HeaderLogin />
      </div>
    </div>
  </header>
);

export default Header;
