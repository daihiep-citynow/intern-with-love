// data
import dataSource from "@/mocks/top-mv/top-mv-items.json";
// components
import TopMVFirstItem from "../TopMVFirstItem";
import TopMVItem from "../TopMVItem";
// another
import styles from "./TopMVItems.module.scss";

const TopMVItems = () => {
  const firstVideo = dataSource[0];
  const topVideos = dataSource.slice(1);

  return (
    <div className={styles["top-mv-items"]}>
      {firstVideo && (
        <TopMVFirstItem
          image={firstVideo.image}
          title={firstVideo.title}
          artist={firstVideo.artist}
        />
      )}
      {topVideos.map((video) => (
        <TopMVItem key={video.id} image={video.image} title={video.title} artist={video.artist} />
      ))}
    </div>
  );
};

export default TopMVItems;
