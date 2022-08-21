// libs
import Image from "next/image";
// another
import styles from "./HotVideoLargeItem.module.scss";

const HotVideoLargeItem = ({ src, traffic, title, artist, duration }) => (
  <div className={styles["hot-video-large-item-wrapper"]}>
    <div className={styles["item-traffic"]}>
      <span className={styles["item-view"]} />
      {traffic}
    </div>
    <Image src={src} width={412} height={230} objectFit="cover" />
    <div className={styles["item-content"]}>
      <div className={styles["item-title"]}>{title}</div>
      <div className={styles["item-artist"]}>{artist}</div>
    </div>
    <div className={styles["item-duration"]}>{duration}</div>
  </div>
);

export default HotVideoLargeItem;
