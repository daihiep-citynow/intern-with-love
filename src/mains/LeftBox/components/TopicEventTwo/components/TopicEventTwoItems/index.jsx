// data
import dataSource from "@/mocks/topic-event/second-items.json";
// components
import TopicEventTwoItem from "../TopicEventTwoItem";
// another
import styles from "./TopicEventTwoItems.module.scss";

const TopEventOneItems = () => (
  <div className={styles["topic-event-two-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventTwoItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventOneItems;
