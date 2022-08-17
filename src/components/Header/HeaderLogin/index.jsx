import classnames from "classnames";

import styles from "./HeaderLogin.module.css";

const HeaderLogin = () => (
  <div className={styles["header-login-wrapper"]}>
    <div className={classnames(styles["header-login-sign-in"], styles["header-login-button"])}>
      Đăng nhập
    </div>
    <div className={classnames(styles["header-login-sign-up"], styles["header-login-button"])}>
      Đăng ký
    </div>
  </div>
);

export default HeaderLogin;
