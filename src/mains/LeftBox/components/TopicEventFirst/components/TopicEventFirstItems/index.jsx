// data
import dataSource from "@/mocks/topic-event/first-items";
// components
import TopicEventFirstItem from "../TopicEventFirstItem";
// another
import styles from "./TopicEventFirstItems.module.scss";

const TopEventFirstItems = () => (
  <div className={styles["topic-event-one-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventFirstItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventFirstItems;
