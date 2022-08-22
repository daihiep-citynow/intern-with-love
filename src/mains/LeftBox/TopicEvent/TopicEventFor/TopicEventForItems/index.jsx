// data
import dataSource from "@/mocks/topic-event/for-items.json";
// components
import TopicEventForItem from "../components/TopicEventForItem";
// another
import styles from "./TopicEventForItems.module.scss";

const TopEventForItems = () => (
  <div className={styles["topic-event-for-items"]}>
    {dataSource.map(({ id, src, title, artist }) => (
      <TopicEventForItem key={id} src={src} title={title} artist={artist} />
    ))}
  </div>
);

export default TopEventForItems;
