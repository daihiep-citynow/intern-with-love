// libs
import { useSelector } from "react-redux";
// components
import CustomTopicEventSongCard from "@/mains/LeftBox/components/CustomTopicEventSongCard";

const TopicEventThirdItem = ({ index }) => {
  const topicEventThird = useSelector((state) => state.topicEventThird.list);

  return (
    <CustomTopicEventSongCard
      src={topicEventThird[index].image}
      title={topicEventThird[index].title}
    />
  );
};

export default TopicEventThirdItem;
