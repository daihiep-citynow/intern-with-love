// libs
import { useSelector } from "react-redux";
// components
import Image from "next/image";
import { CustomerServiceOutlined, HeartFilled, PlayCircleFilled } from "@ant-design/icons";
// another
import styles from "./HotSongItem.module.scss";

const HotSongItem = ({ index }) => {
  const hotSong = useSelector((state) => state.hotSong.list);

  return (
    <div className={styles["hot-song-item-wrapper"]}>
      <Image
        src={hotSong[index].image}
        width={60}
        height={60}
        objectFit="cover"
        placeholder="blur"
      />
      <div className={styles["item-content"]}>
        <span className={styles["item-title"]}>{hotSong[index].title}</span>
        <span className={styles["item-artist"]}>{hotSong[index].artist}</span>
      </div>
      <div className={styles["item-traffic"]}>
        <CustomerServiceOutlined />
        <span className={styles["item-traffic-number"]}>{hotSong[index].traffic}</span>
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
};

export default HotSongItem;
