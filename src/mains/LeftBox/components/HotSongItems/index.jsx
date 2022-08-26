// libs
import { useSelector } from "react-redux";
// components
import HotSongItem from "../HotSongItem";
// another
import styles from "./HotSongItems.module.scss";

const HotSongItems = () => {
  const hotSong = useSelector((state) => state.hotSong.list);

  return (
    <div className={styles["hot-song-items-wrapper"]}>
      {hotSong.map(({ id }, index) => (
        <HotSongItem key={id} index={index} />
      ))}
    </div>
  );
};

export default HotSongItems;
