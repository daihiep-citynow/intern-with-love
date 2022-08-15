import styles from "./FooterInfo.module.css";

const FooterInfo = () => (
  <div className={styles["footer-info-wrapper"]}>
    <div className={styles["footer-info-wrapper-inner"]}>
      <div className={styles["footer-info-support"]}>support</div>
      <div className={styles["footer-info-product"]}>product</div>
      <div className={styles["footer-info-keys"]}>keys</div>
    </div>
  </div>
);

export default FooterInfo;
