// libraries
import classnames from "classnames";
// components
import TopSongImage from "../components/TopSongImage";
// another
import styles from "./TopSongItems.module.scss";

const TopSongItems = () => (
  <div className={styles["top-song-items"]}>
    <div className={classnames(styles["top-song-item"], styles["top-song-first-item"])}>
      <div className={styles["top-song-item-index"]}>
        <span>1</span>
      </div>
      <TopSongImage />
      <div className={styles["top-song-item-title"]}>
        <span className={styles["top-song-item-title-name"]}>Vì Anh Đâu Có Biết</span>
        <span className={styles["top-song-item-title-artist"]}>Madihu</span>
      </div>
    </div>
    <div className={styles["top-song-item"]}>
      <div className={styles["top-song-item-content"]}>
        <div className={styles["top-song-item-index"]}>
          <span>2</span>
        </div>
        <div className={styles["top-song-item-title"]}>
          <span className={styles["top-song-item-title-name"]}>Vì Mẹ Anh Bắt Chia Tay</span>
          <span className={styles["top-song-item-title-artist"]}>Miu Lê</span>
        </div>
      </div>
    </div>
  </div>
);

export default TopSongItems;
