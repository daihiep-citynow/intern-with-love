// libs
import { useSelector } from "react-redux";
// components
import VideoItem from "../VideoItem";

const TopVideoFirstItem = () => {
  const firstVideo = useSelector((state) => state.topVideo.list[0]);

  console.log(firstVideo);

  return (
    <VideoItem
      VideoType="first"
      image={firstVideo.image}
      title={firstVideo.title}
      artist={firstVideo.artist}
    />
  );
};

export default TopVideoFirstItem;
