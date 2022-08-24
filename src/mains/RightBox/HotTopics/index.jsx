// components
import HotTopicsHeader from "../components/HotTopicsHeader";
import HotTopItems from "../components/HotTopicsItems";
// anther
import styles from "./HotTopics.module.scss";

const HotTopics = () => (
  <div className={styles["hot-topics-wrapper"]}>
    <HotTopicsHeader />
    <HotTopItems />
  </div>
);

export default HotTopics;
