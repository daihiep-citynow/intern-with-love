// libs
import { useSelector } from "react-redux";
// components
import ImageLink from "@/components/ImageLink";
import Link from "next/link";
// another
import styles from "./WeeklyArtistItem.module.scss";

const WeeklyArtistItem = ({ index }) => {
  const weeklyArtist = useSelector((state) => state.weeklyArtist.list);

  return (
    <div className={styles["weekly-artiest-item-wrapper"]}>
      <div className={styles["item-image"]}>
        <ImageLink src={weeklyArtist[index].image} href="/" width={152} height={152} />
      </div>
      <Link href="/">
        <a className={styles["item-artist"]}>{weeklyArtist[index].artist}</a>
      </Link>
    </div>
  );
};

export default WeeklyArtistItem;
