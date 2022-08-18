// libraries
import UploadButton from "./UploadButton";
import HomeButton from "./HomeButton";
// another
import styles from "./HeaderButton.module.scss";

const HeaderButton = () => (
  <div className={styles["header-button-wrapper"]}>
    <HomeButton />
    <UploadButton />
  </div>
);

export default HeaderButton;
