// libraries
import classnames from "classnames";
// components
import TopSongImage from "../TopSongImage";
// another
import styles from "./SongItem.module.scss";

const SongItem = ({ songType = false, index, title, artist, image }) => (
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
        <span className={styles["top-song-item-title-name"]}>{title}</span>
        <span className={styles["top-song-item-title-artist"]}>{artist}</span>
      </div>
    </div>
  </div>
);

export default SongItem;
