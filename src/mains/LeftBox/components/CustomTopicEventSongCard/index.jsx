import Image from "next/image";

import styles from "./CustomTopicEventSongCard.module.scss";

const SongCard = ({ src, title, artist = false }) => (
  <div className={styles["song-card-wrapper"]}>
    <Image src={src} height={152} width={152} />
    <div className={styles["song-card-body"]}>
      <div className={styles["song-card-title"]}>{title}</div>
      {artist && <div className={styles["song-card-artist"]}>{artist}</div>}
    </div>
  </div>
);

export default SongCard;
