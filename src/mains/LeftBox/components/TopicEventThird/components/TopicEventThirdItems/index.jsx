// libs
import { useSelector } from "react-redux";
// components
import TopicEventThirdItem from "../TopicEventThirdItem";
// another
import styles from "./TopicEventThirdItems.module.scss";

const TopEventThirdItems = () => {
  const topicEventThird = useSelector((state) => state.topicEventThird.list);

  return (
    <div className={styles["topic-event-third-items"]}>
      {topicEventThird.map(({ id }, index) => (
        <TopicEventThirdItem key={id} index={index} />
      ))}
    </div>
  );
};

export default TopEventThirdItems;
