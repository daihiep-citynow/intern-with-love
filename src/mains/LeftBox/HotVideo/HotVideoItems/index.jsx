// data
import dataSource from "@/mocks/hot-videos/hot-videos-items.json";
// components
import HotVideoLargeItem from "../components/HotVideoLargeItem";
import HotVideoItem from "../components/HotVideoItem";
// another
import styles from "./HotVideoItems.module.scss";

const HotVideoItems = () => {
  const largeVideos = dataSource.slice(0, 2);
  const videos = dataSource.slice(2);

  return (
    <div className={styles["hot-video-items"]}>
      {largeVideos.map(({ id, title, src, artist, traffic, duration }) => (
        <HotVideoLargeItem
          key={id}
          title={title}
          src={src}
          artist={artist}
          traffic={traffic}
          duration={duration}
        />
      ))}
      {videos.map(({ id, title, src, artist, traffic, duration }) => (
        <HotVideoItem
          key={id}
          title={title}
          src={src}
          artist={artist}
          traffic={traffic}
          duration={duration}
        />
      ))}
    </div>
  );
};

export default HotVideoItems;
