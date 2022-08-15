import FooterInfoTop from "./FooterInfoTop";
import FooterInfoBottom from "./FooterInfoBottom";
import styles from "./FooterInfo.module.css";

const FooterInfo = () => (
  <div className={styles["footer-info-wrapper"]}>
    <div className={styles["footer-info-inner"]}>
      <FooterInfoTop />
      <div className={styles["footer-divider"]}> </div>
      <FooterInfoBottom />
    </div>
  </div>
);

export default FooterInfo;
