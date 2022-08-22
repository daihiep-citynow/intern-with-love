// components
import TopSongHeader from "./TopSongHeader";
import TopNav from "../components/TopNav";
import TopSongItems from "./TopSongItems";
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
