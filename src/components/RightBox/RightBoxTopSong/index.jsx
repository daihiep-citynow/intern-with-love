import { PlayCircleOutlined } from "@ant-design/icons";
import classnames from "classnames";
import Image from "next/image";

import styles from "./RightBoxTopSong.module.css";

const RightBoxTopSong = () => (
  <div className={styles["right-box-top-song"]}>
    <div className={styles["right-box-title"]}>
      <span className={styles["right-box-text"]}>bxh bài hát</span>
      <PlayCircleOutlined className={styles["right-box-icon"]} />
    </div>
    <div className={styles["right-box-nav"]}>
      <div
        className={classnames(
          styles["right-box-nav-item-left"],
          styles["right-box-nav-item"],
          styles["right-box-nav-item-active"],
        )}
      >
        Việt Nam
      </div>
      <div className={styles["right-box-nav-item"]}>Âu Mỹ</div>
      <div className={classnames(styles["right-box-nav-item-right"], styles["right-box-nav-item"])}>
        Hàn Quốc
      </div>
    </div>
    <div className={styles["right-box-top-song-items"]}>
      <div
        className={classnames(
          styles["right-box-top-song-item"],
          styles["right-box-top-song-first-item"],
        )}
      >
        <div className={styles["right-box-top-song-item-content"]}>
          <div className={styles["right-box-top-song-item-index"]}>
            <span>1</span>
          </div>
          <div className={styles["right-box-top-song-item-image"]}>
            <Image
              src="https://avatar-ex-swe.nixcdn.com/song/2022/08/05/5/b/8/a/1659665880915.jpg"
              width={134}
              height={134}
              objectFit="contain"
            />
          </div>
          <div className={styles["right-box-top-song-item-title"]}>
            <p className={styles["right-box-top-song-item-title-name"]}>Vì Anh Đâu Có Biết</p>
            <span className={styles["right-box-top-song-item-title-artist"]}>Madihu</span>
          </div>
        </div>
      </div>
      <div className={styles["right-box-top-song-item"]}>
        <div className={styles["right-box-top-song-item-content"]}>
          <div className={styles["right-box-top-song-item-index"]}>
            <span>2</span>
          </div>
          <div className={styles["right-box-top-song-item-title"]}>
            <p className={styles["right-box-top-song-item-title-name"]}>Vì Mẹ Anh Bắt Chia Tay</p>
            <span className={styles["right-box-top-song-item-title-artist"]}>Miu Lê</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default RightBoxTopSong;
