// libs
import { useSelector } from "react-redux";
// components
import TopicEventFourItem from "../TopicEventFourItem";
// another
import styles from "./TopicEventFourItems.module.scss";

const TopEventFourItems = () => {
  const topicEventFour = useSelector((state) => state.topicEventFour.list);

  return (
    <div className={styles["topic-event-four-items"]}>
      {topicEventFour.map(({ id }, index) => (
        <TopicEventFourItem key={id} index={index} />
      ))}
    </div>
  );
};

export default TopEventFourItems;
