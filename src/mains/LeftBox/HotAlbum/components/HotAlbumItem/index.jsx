import Image from "next/image";

import styles from "./HotAlbumItem.module.scss";

const HotAlbumItem = ({ src }) => (
  <div className={styles["hot-album-wrapper"]}>
    <Image src={src} height={152} width={152} />
  </div>
);

export default HotAlbumItem;
