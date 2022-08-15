import { FacebookOutlined } from "@ant-design/icons";

import styles from "./FooterInfoTop.module.css";

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
        <FacebookOutlined />
      </div>
    </div>
  </div>
);

export default FooterInfoTop;
