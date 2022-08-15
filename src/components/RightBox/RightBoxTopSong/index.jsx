import { PlayCircleOutlined } from "@ant-design/icons";
import classnames from "classnames";

import styles from "./RightBoxTopSong.module.css";

const RightBoxTopSong = () => (
  <div className={styles["right-box-top-song"]}>
    <div className={styles["right-box-title"]}>
      <span className={styles["right-box-text"]}>bxh bài hát</span>
      <PlayCircleOutlined className={styles["right-box-icon"]} />
    </div>
    <div className={styles["right-box-nav"]}>
      <div className={classnames(styles["right-box-nav-item-left"], styles["right-box-nav-item"])}>
        Việt Nam
      </div>
      <div className={styles["right-box-nav-item"]}>Âu Mỹ</div>
      <div className={classnames(styles["right-box-nav-item-right"], styles["right-box-nav-item"])}>
        Hàn Quốc
      </div>
    </div>
  </div>
);

export default RightBoxTopSong;
