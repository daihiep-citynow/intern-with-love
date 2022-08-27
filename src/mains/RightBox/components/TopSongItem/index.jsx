// libs
import { useSelector } from "react-redux";
// components
import SongItem from "../SongItem";

const TopSongItem = ({ index }) => {
  const { title, artist } = useSelector((state) => state.topSong.list[index]);

  return <SongItem index={index + 1} title={title} artist={artist} />;
};

export default TopSongItem;
