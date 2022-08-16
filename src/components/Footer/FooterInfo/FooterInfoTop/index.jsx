import { FacebookFilled, InstagramFilled, SkypeFilled } from "@ant-design/icons";
import Image from "next/image";

import styles from "./FooterInfoTop.module.scss";

const FooterInfoTop = () => (
  <div className={styles["footer-info-top-wrapper"]}>
    <div className={styles["footer-info-top-left"]}>
      <div className={styles["footer-info-top-title"]}>
        <span>hỗ trợ</span>
      </div>
      <div className={styles["footer-info-top-items"]}>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
      </div>
    </div>
    <div className={styles["footer-info-top-middle"]}>
      <div className={styles["footer-info-top-title"]}>sản phẩm khác</div>
      <div className={styles["footer-info-top-items"]}>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
        <span>Trợ giúp</span>
      </div>
    </div>
    <div className={styles["footer-info-top-right"]}>
      <div className={styles["footer-info-top-title"]}>top từ khóa</div>
      <div className={styles["footer-info-top-last"]}>
        <span>Girls - aespa, Left And Right - Charlie Puth, Jung Kook</span>
        <span>Vì Mẹ Anh Bắt Chia Tay, Chạy Khỏi Thế Giới Này,</span>
        <span>vaicaunoicokhiennguoithaydoi (acoustic)</span>
      </div>
      <div className={styles["footer-info-top-title-sub"]}>kết nối với chúng tôi</div>
      <div className={styles["footer-info-icons"]}>
        <FacebookFilled />
        <InstagramFilled />
        <SkypeFilled />
      </div>
      <div className={styles["footer-info-logos"]}>
        <Image
          src="https://stc-id.nixcdn.com/v11/images/footer/t_google_play.png"
          height="32px"
          width="108px"
        />
        <Image
          src="https://stc-id.nixcdn.com/v11/images/footer/t_app_store.png"
          height="32px"
          width="108px"
        />
        <Image
          src="https://stc-id.nixcdn.com/v11/images/footer/t_appgallery.png"
          height="32px"
          width="108px"
        />
      </div>
    </div>
  </div>
);

export default FooterInfoTop;
