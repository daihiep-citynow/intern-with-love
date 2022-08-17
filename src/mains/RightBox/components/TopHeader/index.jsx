// another
import styles from "./TopHeader.module.scss";

const TopHeader = ({ children, text }) => (
  <div className={styles["right-box-header"]}>
    <span className={styles["right-box-text"]}>{text}</span>
    {children}
  </div>
);

export default TopHeader;
