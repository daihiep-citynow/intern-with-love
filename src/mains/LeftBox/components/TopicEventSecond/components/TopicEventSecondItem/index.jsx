// libs
import { useSelector } from "react-redux";
// components
import CustomTopicEventSongCard from "../../../CustomTopicEventSongCard";

const TopicEventSecondItem = ({ index }) => {
  const topicEventSecond = useSelector((state) => state.topicEventSecond.list);

  return (
    <CustomTopicEventSongCard
      src={topicEventSecond[index].image}
      title={topicEventSecond[index].title}
    />
  );
};

export default TopicEventSecondItem;
