// libs
import { useSelector } from "react-redux";
// components
import SongItem from "../SongItem";

const TopSongFirstItem = () => {
  const firstItem = useSelector((state) => state.topSong.list[0]);

  return <SongItem songType="true" title={firstItem.title} artist={firstItem.artist} />;
};

export default TopSongFirstItem;
