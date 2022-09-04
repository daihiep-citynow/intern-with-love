// libs
import { useSelector } from "react-redux";
// components
import SongItem from "../SongItem";

const TopSongFirstItem = () => {
  const { title, artist, image, slug } = useSelector((state) => state.topSong.list[0]);

  return <SongItem songType="true" title={title} artist={artist} image={image} href={slug} />;
};

export default TopSongFirstItem;
