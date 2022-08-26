// components
import HotTopicsHeader from "../components/HotTopicHeader";
import HotTopItems from "../components/HotTopicItems";
// anther
import styles from "./HotTopics.module.scss";

const HotTopics = () => (
  <div className={styles["hot-topics-wrapper"]}>
    <HotTopicsHeader />
    <HotTopItems />
  </div>
);

export default HotTopics;
