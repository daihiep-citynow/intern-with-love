// libs
import { useSelector } from "react-redux";
// components
import TopicEventSecondItem from "../TopicEventSecondItem";
// another
import styles from "./TopicEventSecondItems.module.scss";

const TopicEventSecondItems = () => {
  const topicEventSecond = useSelector((state) => state.topicEventSecond.list);

  return (
    <div className={styles["topic-event-second-items"]}>
      {topicEventSecond.map((item, index) => (
        <TopicEventSecondItem key={item.id} index={index} />
      ))}
    </div>
  );
};

export default TopicEventSecondItems;
