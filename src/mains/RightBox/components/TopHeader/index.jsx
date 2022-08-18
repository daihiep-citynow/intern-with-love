// libraries
import { PlayCircleOutlined } from "@ant-design/icons";
// another
import styles from "./TopHeader.module.scss";

const TopHeader = ({ text }) => (
  <div className={styles["right-box-header"]}>
    <span className={styles["right-box-text"]}>{text}</span>
    <PlayCircleOutlined />
  </div>
);

export default TopHeader;
