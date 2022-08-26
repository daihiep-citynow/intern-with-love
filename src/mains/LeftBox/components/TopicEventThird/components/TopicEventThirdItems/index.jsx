// data
import dataSource from "@/mocks/topic-event/third-items";
// components
import TopicEventThirdItem from "../TopicEventThirdItem";
// another
import styles from "./TopicEventThirdItems.module.scss";

const TopEventOneItems = () => (
  <div className={styles["topic-event-three-items"]}>
    {dataSource.map(({ id, src, title }) => (
      <TopicEventThirdItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventOneItems;
