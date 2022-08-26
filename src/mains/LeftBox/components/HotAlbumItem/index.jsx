// libs
import { useSelector } from "react-redux";
// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HotAlbumItem.module.scss";

const HotAlbumItem = ({ index }) => {
  const hotAlbum = useSelector((state) => state.hotAlbum.list);

  return (
    <div className={styles["hot-album-wrapper"]}>
      <ImageLink src={hotAlbum[index].image} href="/" width={152} height={152} />
    </div>
  );
};

export default HotAlbumItem;
