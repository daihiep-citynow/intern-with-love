// data
import dataSource from "@/mocks/topic-event/second-items";
// components
import TopicEventSecondItem from "../TopicEventSecondItem";
// another
import styles from "./TopicEventSecondItems.module.scss";

const TopicEventSecondItems = () => (
  <div className={styles["topic-event-second-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventSecondItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopicEventSecondItems;
