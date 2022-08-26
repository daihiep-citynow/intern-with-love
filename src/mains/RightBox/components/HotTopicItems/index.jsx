// libs
import { useSelector } from "react-redux";
// components
import HotTopicItem from "../HotTopicItem";

const HotTopicItems = () => {
  const hotTopic = useSelector((state) => state.hotTopic.list);

  return (
    <div>
      {hotTopic.map((item, index) => (
        <HotTopicItem key={item.id} index={index} />
      ))}
    </div>
  );
};

export default HotTopicItems;
