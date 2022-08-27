// libs
import { useSelector } from "react-redux";
// components
import TopSongFirstItem from "../TopSongFirstItem";
import TopSongItem from "../TopSongItem";
// another
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => {
  const topSong = useSelector((state) => state.topSong.list);

  return (
    <div className={styles["top-song-items"]}>
      {topSong.map(({ id }, index) => {
        if (index) {
          return <TopSongItem key={id} index={index} />;
        }
        return <TopSongFirstItem key={id} />;
      })}
    </div>
  );
};

export default TopSongItems;
