// libs
import { useSelector } from "react-redux";

// components
import CustomTopicEventSongCard from "../../../CustomTopicEventSongCard";

const TopicEventFirstItem = ({ index }) => {
  const topicEventFirst = useSelector((state) => state.topicEventFirst.list);

  return (
    <CustomTopicEventSongCard
      src={topicEventFirst[index].image}
      title={topicEventFirst[index].title}
    />
  );
};

export default TopicEventFirstItem;
