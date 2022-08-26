// libs
import Image from "next/image";
import { CustomerServiceOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
// another
import styles from "./HotVideoItem.module.scss";

const HotVideItem = ({ index }) => {
  const hotVideo = useSelector((state) => state.hotVideo.list.slice(2));

  return (
    <div className={styles["hot-video-item-wrapper"]}>
      <div className={styles["item-traffic"]}>
        <CustomerServiceOutlined />
        <span className={styles["item-traffic-number"]}>{hotVideo[index].traffic}</span>
      </div>
      <Image src={hotVideo[index].image} width={197} height={115} objectFit="cover" />
      <div className={styles["item-content"]}>
        <div className={styles["item-title"]}>{hotVideo[index].title}</div>
        <div className={styles["item-artist"]}>{hotVideo[index].artist}</div>
      </div>
      <div className={styles["item-duration"]}>{hotVideo[index].duration}</div>
    </div>
  );
};

export default HotVideItem;
