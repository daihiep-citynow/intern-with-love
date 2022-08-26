// libs
import { useSelector } from "react-redux";
// components
import VideoItem from "../VideoItem";

const TopVideoItem = ({ index }) => {
  const topVideo = useSelector((state) => state.topVideo.list);

  return (
    <VideoItem
      image={topVideo[index].image}
      title={topVideo[index].title}
      artist={topVideo[index].artist}
    />
  );
};

export default TopVideoItem;
