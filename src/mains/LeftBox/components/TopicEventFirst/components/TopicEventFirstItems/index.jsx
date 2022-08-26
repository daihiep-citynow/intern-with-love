// libs
import { useSelector } from "react-redux";
// components
import TopicEventFirstItem from "../TopicEventFirstItem";
// another
import styles from "./TopicEventFirstItems.module.scss";

const TopicEventFirstItems = () => {
  const topicEventFirst = useSelector((state) => state.topicEventFirst.list);

  return (
    <div className={styles["topic-event-one-items"]}>
      {topicEventFirst.map((item, index) => (
        <TopicEventFirstItem key={item.id} index={index} />
      ))}
    </div>
  );
};

export default TopicEventFirstItems;
