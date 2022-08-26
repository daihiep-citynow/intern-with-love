// libs
import { useSelector } from "react-redux";
// components
import CustomTopicEventSongCard from "@/mains/LeftBox/components/CustomTopicEventSongCard";

const TopicEventFourItem = ({ index }) => {
  const topicEventFour = useSelector((state) => state.topicEventFour.list);

  return (
    <CustomTopicEventSongCard
      src={topicEventFour[index].image}
      title={topicEventFour[index].title}
      artist={topicEventFour[index].artist}
    />
  );
};

export default TopicEventFourItem;
