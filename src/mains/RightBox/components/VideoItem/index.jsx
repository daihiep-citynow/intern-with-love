// libraries
import classnames from "classnames";
// components
import TextLink from "@/components/TextLink";
import TopVideoImage from "../TopVideoImage";
// another
import styles from "./VideoItem.module.scss";

const VideoItem = ({ VideoType = false, title, artist, image, href }) => (
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
        <TextLink names={styles["top-video-item-title-name"]} text={title} href={href} />
        <TextLink names={styles["top-video-item-title-artist"]} text={artist} href={href} />
      </div>
    </div>
  </div>
);

export default VideoItem;
