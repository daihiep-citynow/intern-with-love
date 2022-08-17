// components
import TopSongHeader from "./TopSongHeader";
import TopNav from "../RightBox/components/TopNav";
import TopSongItems from "./TopSongItems";
// another
import styles from "./TopSong.module.scss";

const TopSong = () => (
  <div className={styles["top-song"]}>
    <TopSongHeader />
    <TopNav />
    <TopSongItems />
  </div>
);

export default TopSong;
