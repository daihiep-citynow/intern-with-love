// data
import dataSource from "@/mocks/topic-event/four-items";
// components
import TopicEventFourItem from "../TopicEventFourItem";
// another
import styles from "./TopicEventFourItems.module.scss";

const TopEventFourItems = () => (
  <div className={styles["topic-event-for-items"]}>
    {dataSource.map(({ id, src, title, artist }) => (
      <TopicEventFourItem key={id} src={src} title={title} artist={artist} />
    ))}
  </div>
);

export default TopEventFourItems;
