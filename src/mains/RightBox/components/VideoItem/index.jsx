// libraries
import classnames from "classnames";
// components
import TopVideoImage from "../TopVideoImage";
// another
import styles from "./VideoItem.module.scss";

const VideoItem = ({ VideoType = false, title, artist, image }) => (
  <div
    className={classnames(styles["top-video-item"], {
      [styles["top-video-first-item"]]: VideoType,
    })}
  >
    <div className={styles["top-video-item-content"]}>
      {VideoType ? (
        <>
          <div className={styles["top-video-item-index"]}>
            <span>1</span>
          </div>
          <TopVideoImage src={image} width={300} height={168} />
        </>
      ) : (
        <TopVideoImage src={image} width={110} height={62} />
      )}
      <div className={styles["top-video-item-title"]}>
        <span className={styles["top-video-item-title-name"]}>{title}</span>
        <span className={styles["top-video-item-title-artist"]}>{artist}</span>
      </div>
    </div>
  </div>
);

export default VideoItem;