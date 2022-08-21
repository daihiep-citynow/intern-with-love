// components
import ImageLink from "@/components/ImageLink";
// another
import image from "./assets/play_now.png";
import styles from "./PlayNow.module.scss";

const PlayNow = () => (
  <div className={styles["play-now-wrapper"]}>
    <ImageLink src={image} href="/" width={300} height={240} />
  </div>
);

export default PlayNow;
