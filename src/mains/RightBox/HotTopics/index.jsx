// components
import HotTopicsHeader from "./Header";
import HotTopItems from "./Items";
// anther
import styles from "./HotTopics.module.scss";

const HotTopics = () => (
  <div className={styles["hot-topics-wrapper"]}>
    <HotTopicsHeader />
    <HotTopItems />
  </div>
);

export default HotTopics;
