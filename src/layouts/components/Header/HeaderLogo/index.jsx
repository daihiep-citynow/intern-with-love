// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => (
  <div className={styles["header-logo-wrapper"]}>
    <ImageLink
      href="/"
      src="https://intern-with-love.sgp1.digitaloceanspaces.com/logo.png"
      width="64"
      height="32"
    />
  </div>
);

export default HeaderLogo;
