// libraries
import classnames from "classnames";
// components
import TextLink from "@/components/TextLink";
import TopSongImage from "../TopSongImage";
// another
import styles from "./SongItem.module.scss";

const SongItem = ({ songType = false, index, title, artist, image, href }) => (
  <div
    className={classnames(styles["top-song-item"], {
      [styles["top-song-first-item"]]: songType,
    })}
  >
    <div className={styles["top-song-item-content"]}>
      <div className={styles["top-song-item-index"]}>
        <span>{index || 1}</span>
      </div>
      {songType && <TopSongImage src={image} />}
      <div className={styles["top-song-item-title"]}>
        <TextLink names={styles["top-song-item-title-name"]} text={title} href={href} />
        <TextLink names={styles["top-song-item-title-artist"]} text={artist} href={href} />
      </div>
    </div>
  </div>
);

export default SongItem;
