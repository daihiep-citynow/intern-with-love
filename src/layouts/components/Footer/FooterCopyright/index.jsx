import { PushpinFilled, PhoneFilled, MailFilled } from "@ant-design/icons";

import styles from "./FooterCopyright.module.scss";

const FooterCopyright = () => (
  <div className={styles["footer-copyright-wrapper"]}>
    <div className={styles["footer-copyright-inner"]}>
      <div className={styles["footer-copyright-contact"]}>
        <div className={styles["footer-copyright-address"]}>
          <PushpinFilled />
          <span>
            Tầng 19, Tòa nhà The 678 Tower, Số 67 đường Hoàng Văn Thái, phường Tân Phú, quận 7, TP.
            HCM
          </span>
        </div>
        <div className={styles["footer-copyright-email"]}>
          <MailFilled />
          <span>support@nct.vn</span>
        </div>
        <div className={styles["footer-copyright-phone"]}>
          <PhoneFilled />
          <span>(028) 3868 7979</span>
        </div>
      </div>
      <div>© NCT Corp. All rights reserved</div>
    </div>
  </div>
);

export default FooterCopyright;
