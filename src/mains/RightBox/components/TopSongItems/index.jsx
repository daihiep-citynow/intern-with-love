// data
import dataSource from "@/mocks/top-songs/top-songs-items.json";
// components
import TopSongFirstItem from "../TopSongFirstItem";
import TopSongItem from "../TopSongItem";
// another
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => {
  const firstSong = dataSource[0];
  const topSongs = dataSource.slice(1);

  return (
    <div className={styles["top-song-items"]}>
      <TopSongFirstItem title={firstSong.title} artist={firstSong.artist} />
      {topSongs.map((song, index) => (
        <TopSongItem key={song.id} index={index + 2} title={song.title} artist={song.artist} />
      ))}
    </div>
  );
};

export default TopSongItems;
