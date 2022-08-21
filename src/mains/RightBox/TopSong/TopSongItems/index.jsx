// libraries
import { useState, useEffect } from "react";
import axios from "axios";
// components
import TopSongFirstItem from "../components/TopSongFirstItem";
import TopSongItem from "../components/TopSongItem";
// another
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => {
  const [firstSong, setFirstSong] = useState({});
  const [topSongs, setTopSongs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "topsongs",
      };

      const { data } = await axios(options);

      setFirstSong(data[0]);
      setTopSongs(data.slice(1));
    };

    fetchData();
  }, []);

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
