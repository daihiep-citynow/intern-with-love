import Image from "next/image";

import styles from "./FooterCooper.module.css";

const FooterCooper = () => (
  <div className={styles["footer-cooper-wrapper"]}>
    <div className={styles["footer-cooper-inner"]}>
      <div className={styles["footer-cooper-title"]}>LIÊN KẾT VÀ HỢP TÁC</div>
      <div className={styles["footer-cooper-items"]}>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/20.png"
            width="195"
            height="100"
          />
        </div>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/2-new.png"
            width="195"
            height="100"
          />
        </div>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/19.png"
            width="195"
            height="100"
          />
        </div>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/11.png"
            width="195"
            height="100"
          />
        </div>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/3-new.png"
            width="195"
            height="100"
          />
        </div>
        <div className={styles["footer-cooper-item"]}>
          <Image
            src="https://stc-id.nixcdn.com/v11/images/footer/15.png"
            width="195"
            height="100"
          />
        </div>
      </div>
    </div>
  </div>
);

export default FooterCooper;
