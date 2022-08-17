// component
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";
// another
import styles from "./HeaderLogin.module.scss";

const HeaderLogin = () => (
  <div className={styles["header-login-wrapper"]}>
    <SignInButton />
    <SignUpButton />
  </div>
);

export default HeaderLogin;
