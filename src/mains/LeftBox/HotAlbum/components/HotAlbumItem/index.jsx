// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HotAlbumItem.module.scss";

const HotAlbumItem = ({ src }) => (
  <div className={styles["hot-album-wrapper"]}>
    <ImageLink src={src} href="/" width={152} height={152} />
  </div>
);

export default HotAlbumItem;
