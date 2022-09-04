// libs
import { useSelector } from "react-redux";
// components
import VideoItem from "../VideoItem";

const TopVideoFirstItem = () => {
  const { image, title, artist, slug } = useSelector((state) => state.topVideo.list[0]);

  return <VideoItem VideoType="first" image={image} title={title} artist={artist} href={slug} />;
};

export default TopVideoFirstItem;
