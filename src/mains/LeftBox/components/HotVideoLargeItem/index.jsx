// libs
import { useSelector } from "react-redux";
import { CustomerServiceOutlined } from "@ant-design/icons";
import Image from "next/image";
// another
import styles from "./HotVideoLargeItem.module.scss";

const HotVideoLargeItem = ({ index }) => {
  const videos = useSelector((state) => state.hotVideo.list.slice(0, 2));

  return (
    <div className={styles["hot-video-large-item-wrapper"]}>
      <div className={styles["item-traffic"]}>
        <CustomerServiceOutlined />
        <span className={styles["item-traffic-number"]}>{videos[index].traffic}</span>
      </div>
      <Image
        src={videos[index].image}
        width={412}
        height={230}
        objectFit="cover"
        placeholder="blur"
      />
      <div className={styles["item-content"]}>
        <div className={styles["item-title"]}>{videos[index].title}</div>
        <div className={styles["item-artist"]}>{videos[index].artist}</div>
      </div>
      <div className={styles["item-duration"]}>{videos[index].duration}</div>
    </div>
  );
};

export default HotVideoLargeItem;
