// libs
import { useSelector } from "react-redux";
// components
import WeeklyArtistItem from "../WeeklyArtistItem";
// another
import styles from "./WeeklyArtistItems.module.scss";

const WeeklyArtistItems = () => {
  const weeklyArtist = useSelector((state) => state.weeklyArtist.list);

  return (
    <div className={styles["weekly-artist-items-wrapper"]}>
      {weeklyArtist.map(({ id }, index) => (
        <WeeklyArtistItem key={id} index={index} />
      ))}
    </div>
  );
};
export default WeeklyArtistItems;
