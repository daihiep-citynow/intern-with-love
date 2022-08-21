// components
import ImageLink from "@/components/ImageLink";
import Link from "next/link";
// another
import styles from "./WeeklyArtistItem.module.scss";

const WeeklyArtistItem = ({ src, artist }) => (
  <div className={styles["weekly-artiest-item-wrapper"]}>
    <div className={styles["item-image"]}>
      <ImageLink src={src} href="/" width={152} height={152} />
    </div>

    <Link href="/">
      <a className={styles["item-artist"]}>{artist}</a>
    </Link>
  </div>
);

export default WeeklyArtistItem;
