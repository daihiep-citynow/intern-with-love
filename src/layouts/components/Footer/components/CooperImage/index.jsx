// libraries
import Image from "next/image";
// another
import styles from "./CooperImage.module.scss";

const CooperImage = ({ src, width = 195, height = 100 }) => (
  <div className={styles["footer-cooper-item"]}>
    <Image src={src} width={width} height={height} />
  </div>
);

export default CooperImage;
