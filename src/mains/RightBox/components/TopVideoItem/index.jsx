// libs
import { useSelector } from "react-redux";
// components
import VideoItem from "../VideoItem";

const TopVideoItem = ({ index }) => {
  const { image, title, artist, slug } = useSelector((state) => state.topVideo.list[index]);

  return <VideoItem image={image} title={title} artist={artist} href={slug} />;
};

export default TopVideoItem;
