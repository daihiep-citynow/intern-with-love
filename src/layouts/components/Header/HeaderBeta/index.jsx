// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HeaderBeta.module.scss";

const HeaderBeta = () => (
  <div className={styles["header-beta-wrapper"]}>
    <ImageLink
      href="/"
      src="https://intern-with-love.sgp1.digitaloceanspaces.com/ic_new.png"
      width="96"
      height="32"
    />
  </div>
);

export default HeaderBeta;
