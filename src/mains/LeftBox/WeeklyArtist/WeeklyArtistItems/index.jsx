// data
import dataSource from "@/mocks/weekly-artist/weekly-artist-items.json";
// components
import WeeklyArtistItem from "../components/WeeklyArtistItem";
// another
import styles from "./WeeklyArtistItems.module.scss";

const WeeklyArtistItems = () => (
  <div className={styles["weekly-artist-items-wrapper"]}>
    {dataSource.map(({ id, artist, src }) => (
      <WeeklyArtistItem key={id} artist={artist} src={src} />
    ))}
  </div>
);

export default WeeklyArtistItems;
