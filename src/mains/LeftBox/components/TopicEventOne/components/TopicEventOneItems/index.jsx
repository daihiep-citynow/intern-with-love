// data
import dataSource from "@/mocks/topic-event/first-items.json";
// components
import TopicEventOneItem from "../TopicEventOneItem";
// another
import styles from "./TopicEventOneItems.module.scss";

const TopEventOneItems = () => (
  <div className={styles["topic-event-one-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventOneItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventOneItems;
