import Image from "next/image";

import styles from "./FooterInfoBottom.module.scss";

const FooterInfoBottom = () => (
  <div className={styles["footer-info-bottom"]}>
    <div className={styles["footer-info-logo"]}>
      <Image
        src="https://intern-with-love.sgp1.digitaloceanspaces.com/t_logo_company.png"
        height="80px"
        width="96px"
        objectFit="contain"
      />
    </div>
    <div className={styles["footer-info-text"]}>
      <div className={styles["footer-info-text-title"]}>CÔNG TY CỔ PHẦN N C T</div>
      <ul className={styles["footer-info-text-list"]}>
        <li>
          Chủ sở hữu website:
          <b> Ông Nhan Thế Luân</b>
        </li>
        <li>Giấy phép MXH số 499/GP-BTTTT do Bộ Thông Tin và Truyền thông cấp ngày 28/09/2015.</li>
        <li>
          Giấy Chứng nhận Đăng ký Kinh doanh số 0305535715 do Sở kế hoạch và Đầu tư thành phố Hồ Chí
          Minh cấp ngày 01/03/2008.
        </li>
      </ul>
    </div>
    <div className={styles["footer-info-notify"]}>
      <Image
        src="https://intern-with-love.sgp1.digitaloceanspaces.com/t_bo_cong_thuong.png"
        height="80px"
        width="160px"
        objectFit="contain"
      />
    </div>
    <div>
      <Image
        src="https://intern-with-love.sgp1.digitaloceanspaces.com/t_dmca.png"
        height="80px"
        width="140px"
        objectFit="contain"
      />
    </div>
  </div>
);

export default FooterInfoBottom;
