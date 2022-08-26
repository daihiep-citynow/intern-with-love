// libs
import { useSelector } from "react-redux";
// components
import TopSongFirstItem from "../TopSongFirstItem";
import TopSongItem from "../TopSongItem";
// another
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => {
  const topSong = useSelector((state) => state.topSong.list.slice(1));

  return (
    <div className={styles["top-song-items"]}>
      <TopSongFirstItem />
      {topSong.map((song, index) => (
        <TopSongItem key={song.id} index={index + 1} />
      ))}
    </div>
  );
};

export default TopSongItems;
