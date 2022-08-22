// components
import HotTopicsHeader from "./HotTopicsHeader";
import HotTopItems from "./HotTopicsItems";
// anther
import styles from "./HotTopics.module.scss";

const HotTopics = () => (
  <div className={styles["hot-topics-wrapper"]}>
    <HotTopicsHeader />
    <HotTopItems />
  </div>
);

export default HotTopics;
