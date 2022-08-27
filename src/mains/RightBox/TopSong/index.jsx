// components
import TopSongHeader from "../components/TopSongHeader";
import TopSongNav from "../components/TopSongNav";
import TopSongItems from "../components/TopSongItems";
// another
import styles from "./TopSong.module.scss";

const TopSong = () => (
  <div className={styles["top-song-wrapper"]}>
    <TopSongHeader />
    <TopSongNav />
    <TopSongItems />
  </div>
);

export default TopSong;
