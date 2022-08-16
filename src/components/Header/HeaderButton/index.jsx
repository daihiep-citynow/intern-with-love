import { HomeOutlined, CloudUploadOutlined } from "@ant-design/icons";

import styles from "./HeaderButton.module.scss";

const HeaderButton = () => (
  <div className={styles["header-button-wrapper"]}>
    <div className={styles["header-button-icon"]}>
      <HomeOutlined />
    </div>
    <div className={styles["header-button-icon"]}>
      <CloudUploadOutlined />
    </div>
  </div>
);

export default HeaderButton;
