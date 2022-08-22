// data
import dataSource from "@/mocks/topic-event/third-item.json";
// components
import TopicEventThreeItem from "../components/TopicEventThreeItem";
// another
import styles from "./TopicEventThreeItems.module.scss";

const TopEventOneItems = () => (
  <div className={styles["topic-event-three-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventThreeItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventOneItems;
