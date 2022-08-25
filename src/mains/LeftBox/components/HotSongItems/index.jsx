// data
import dataSource from "@/mocks/hot-songs/hot-songs-items.json";
// components
import HotSongItem from "../HotSongItem";
// another
import styles from "./HotSongItems.module.scss";

const HotSongItems = () => (
  <div className={styles["hot-song-items-wrapper"]}>
    {dataSource.map(({ id, title, artist, src, traffic }) => (
      <HotSongItem key={id} title={title} artist={artist} src={src} traffic={traffic} />
    ))}
  </div>
);

export default HotSongItems;
