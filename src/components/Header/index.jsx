import HeaderLogo from "./HeaderLogo";
import HeaderBeta from "./HeaderBeta";
import HeaderNav from "./HeaderNav";
import HeaderSearch from "./HeaderSearch";
import HeaderButton from "./HeaderButton";
import HeaderLogin from "./HeaderLogin";
import styles from "./Header.module.css";

const Header = () => (
  <header className="header-wrapper">
    <div className={styles["header-wrapper-inner"]}>
      <HeaderLogo />
      <HeaderBeta />
      <HeaderNav />
      <HeaderSearch />
      <HeaderButton />
      <HeaderLogin />
    </div>
  </header>
);

export default Header;
