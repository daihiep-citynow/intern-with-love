// components
import HotTopicsHeader from "../components/HotTopicHeader";
import HotTopicItems from "../components/HotTopicItems";
// anther
import styles from "./HotTopics.module.scss";

const HotTopics = () => (
  <div className={styles["hot-topics-wrapper"]}>
    <HotTopicsHeader />
    <HotTopicItems />
  </div>
);

export default HotTopics;
