import FooterInfoTop from "../components/FooterInfoTop";
import FooterInfoBottom from "../components/FooterInfoBottom";
import styles from "./FooterInfo.module.scss";

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
