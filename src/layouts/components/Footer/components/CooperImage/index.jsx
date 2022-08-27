// libraries
import Image from "next/image";
// another
import styles from "./CooperImage.module.scss";

const CooperImage = ({ image, width = 195, height = 100 }) => (
  <div className={styles["footer-cooper-item"]}>
    <Image src={image} width={width} height={height} />
  </div>
);

export default CooperImage;
