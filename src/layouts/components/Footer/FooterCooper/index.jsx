// components
import CooperImage from "../components/CooperImage";
// another
import styles from "./FooterCooper.module.scss";

const FooterCooper = () => (
  <div className={styles["footer-cooper-wrapper"]}>
    <div className={styles["footer-cooper-inner"]}>
      <div className={styles["footer-cooper-title"]}>LIÊN KẾT VÀ HỢP TÁC</div>
      <div className={styles["footer-cooper-items"]}>
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/20.png" />
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/11.png" />
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/19.png" />
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/15.png" />
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/3-new.png" />
        <CooperImage src="https://stc-id.nixcdn.com/v11/images/footer/15.png" />
      </div>
    </div>
  </div>
);

export default FooterCooper;
