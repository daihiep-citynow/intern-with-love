// component
import SignInButton from "../components/SignInButton";
import SignUpButton from "../components/SignUpButton";
// another
import styles from "./HeaderLogin.module.scss";

const HeaderLogin = () => (
  <div className={styles["header-login-wrapper"]}>
    <SignInButton />
    <SignUpButton />
  </div>
);

export default HeaderLogin;
