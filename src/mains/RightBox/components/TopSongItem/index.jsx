// libs
import { useSelector } from "react-redux";
// components
import SongItem from "../SongItem";

const TopSongItem = ({ index }) => {
  const topSong = useSelector((state) => state.topSong.list);

  return <SongItem index={index + 1} title={topSong[index].title} artist={topSong[index].artist} />;
};

export default TopSongItem;
