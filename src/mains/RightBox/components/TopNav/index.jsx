// libraries
import classnames from "classnames";
// another
import styles from "./TopNav.module.scss";

const TopNav = () => (
  <div className={styles["right-box-nav"]}>
    <div
      className={classnames(
        styles["right-box-nav-item-left"],
        styles["right-box-nav-item"],
        styles["right-box-nav-item-active"],
      )}
    >
      Việt Nam
    </div>
    <div className={styles["right-box-nav-item"]}>Âu Mỹ</div>
    <div className={classnames(styles["right-box-nav-item-right"], styles["right-box-nav-item"])}>
      Hàn Quốc
    </div>
  </div>
);

export default TopNav;
