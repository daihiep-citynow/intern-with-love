// libs
import Image from "next/image";
import { CustomerServiceOutlined } from "@ant-design/icons";
// another
import styles from "./HotVideoItem.module.scss";

const HotVideItem = ({ src, title, artist, traffic, duration }) => (
  <div className={styles["hot-video-item-wrapper"]}>
    <div className={styles["item-traffic"]}>
      <CustomerServiceOutlined />
      <span className={styles["item-traffic-number"]}>{traffic}</span>
    </div>
    <Image src={src} width={197} height={115} objectFit="cover" />
    <div className={styles["item-content"]}>
      <div className={styles["item-title"]}>{title}</div>
      <div className={styles["item-artist"]}>{artist}</div>
    </div>
    <div className={styles["item-duration"]}>{duration}</div>
  </div>
);

export default HotVideItem;
