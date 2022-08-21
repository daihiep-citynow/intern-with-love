// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./Item.module.scss";

const Item = ({ src, href, width = 300, height = 100 }) => (
  <div className={styles["hot-topics-item"]}>
    <ImageLink src={src} href={href} width={width} height={height} />
  </div>
);

export default Item;
