// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HeaderBeta.module.scss";

const HeaderBeta = () => (
  <div className={styles["header-beta-wrapper"]}>
    <ImageLink
      href="/"
      src="https://stc-id.nixcdn.com/v11/images/ic_new.png"
      width="96"
      height="32"
    />
  </div>
);

export default HeaderBeta;
