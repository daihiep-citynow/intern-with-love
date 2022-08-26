// libs
import { useSelector } from "react-redux";
// components
import TopVideoFirstItem from "../TopVideoFirstItem";
import TopVideoItem from "../TopVideoItem";
// another
import styles from "./TopVideoItems.module.scss";

const TopVideoItems = () => {
  const topVideo = useSelector((state) => state.topVideo.list.slice(1));

  return (
    <div className={styles["top-video-items"]}>
      <TopVideoFirstItem />
      {topVideo.map((video, index) => (
        <TopVideoItem key={video.id} index={index + 1} />
      ))}
    </div>
  );
};

export default TopVideoItems;
