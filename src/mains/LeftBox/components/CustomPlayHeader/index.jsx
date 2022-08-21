// libs
import { RightOutlined } from "@ant-design/icons";
// another
import styles from "./CustomPlayHeader.module.scss";

const CustomPlayHeader = ({ text }) => (
  <div className={styles["header-wrapper"]}>
    <span className={styles["header-text"]}>{text}</span>
    <RightOutlined className={styles["header-logo"]} />
  </div>
);

export default CustomPlayHeader;
