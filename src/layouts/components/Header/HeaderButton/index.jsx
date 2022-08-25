// libraries
import UploadButton from "../components/UploadButton";
import HomeButton from "../components/HomeButton";
// another
import styles from "./HeaderButton.module.scss";

const HeaderButton = () => (
  <div className={styles["header-button-wrapper"]}>
    <HomeButton />
    <UploadButton />
  </div>
);

export default HeaderButton;
