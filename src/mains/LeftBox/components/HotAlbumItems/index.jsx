// libs
import { useSelector } from "react-redux";
// components
import HotAlbumItem from "../HotAlbumItem";
// another
import styles from "./HotAlbumItems.module.scss";

const HotAlbumItems = () => {
  const hotAlbum = useSelector((state) => state.hotAlbum.list);

  return (
    <div className={styles["hot-album-items-wrapper"]}>
      {hotAlbum.map(({ id }, index) => (
        <HotAlbumItem key={id} index={index} />
      ))}
    </div>
  );
};

export default HotAlbumItems;
