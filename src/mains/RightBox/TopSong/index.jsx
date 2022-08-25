// components
import TopSongHeader from "../components/TopSongHeader";
import TopNav from "../components/TopNav";
import TopSongItems from "../components/TopSongItems";
// another
import styles from "./TopSong.module.scss";

const TopSong = () => (
  <div className={styles["top-song-wrapper"]}>
    <TopSongHeader />
    <TopNav />
    <TopSongItems />
  </div>
);

export default TopSong;
