import styles from "./CustomTopicEventHeader.module.scss";

const CustomTopicEventHeader = ({ text }) => (
  <div className={styles["header-wrapper"]}>
    <span className={styles["header-text"]}>{text}</span>
  </div>
);

export default CustomTopicEventHeader;
