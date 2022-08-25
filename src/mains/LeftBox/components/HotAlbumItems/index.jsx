// data
import dataSource from "@/mocks/hot-album/hot-album-items.json";
// components
import HotAlbumItem from "../HotAlbumItem";
// another
import styles from "./HotAlbumItems.module.scss";

const HotAlbumItems = () => (
  <div className={styles["hot-album-items-wrapper"]}>
    {dataSource.map(({ id, src }) => (
      <HotAlbumItem key={id} src={src} />
    ))}
  </div>
);

export default HotAlbumItems;
