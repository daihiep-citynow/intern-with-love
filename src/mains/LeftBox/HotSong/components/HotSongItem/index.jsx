// components
import Image from "next/image";
import { CustomerServiceOutlined, HeartFilled, PlayCircleFilled } from "@ant-design/icons";
// another
import styles from "./HotSongItem.module.scss";

const HotSongItem = ({ src, title, artist, traffic }) => (
  <div className={styles["hot-song-item-wrapper"]}>
    <Image src={src} width={60} height={60} objectFit="cover" />
    <div className={styles["item-content"]}>
      <span className={styles["item-title"]}>{title}</span>
      <span className={styles["item-artist"]}>{artist}</span>
    </div>
    <div className={styles["item-traffic"]}>
      <CustomerServiceOutlined />
      <span className={styles["item-traffic-number"]}>{traffic}</span>
    </div>
    <div className={styles["item-control"]}>
      <div className={styles["item-control-heart"]}>
        <HeartFilled />
        <HeartFilled />
      </div>
      <div className={styles["item-control-play"]}>
        <PlayCircleFilled />
        <PlayCircleFilled />
      </div>
    </div>
  </div>
);

export default HotSongItem;
