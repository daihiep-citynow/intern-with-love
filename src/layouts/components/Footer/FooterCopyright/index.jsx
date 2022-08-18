// components
import AddressCopyright from "../components/AddressCopyright";
import MailCopyright from "../components/MailCopyright";
import PhoneCopyright from "../components/PhoneCopyright";
// another
import styles from "./FooterCopyright.module.scss";

const FooterCopyright = () => (
  <div className={styles["footer-copyright-wrapper"]}>
    <div className={styles["footer-copyright-inner"]}>
      <div className={styles["footer-copyright-contact"]}>
        <AddressCopyright />
        <MailCopyright />
        <PhoneCopyright />
      </div>
      <div>NCT Corp. All rights reserved</div>
    </div>
  </div>
);

export default FooterCopyright;
