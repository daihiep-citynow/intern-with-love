// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => (
  <div className={styles["header-logo-wrapper"]}>
    <ImageLink
      href="/"
      src="https://stc-id.nixcdn.com/v11/images/header_new/logo_new.png"
      width="64"
      height="32"
    />
  </div>
);

export default HeaderLogo;
