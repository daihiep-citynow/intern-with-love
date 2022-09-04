// libs
import { useSelector } from "react-redux";
// components
import SongItem from "../SongItem";

const TopSongItem = ({ index }) => {
  const { title, artist, slug } = useSelector((state) => state.topSong.list[index]);

  return <SongItem index={index + 1} title={title} artist={artist} href={slug} />;
};

export default TopSongItem;
