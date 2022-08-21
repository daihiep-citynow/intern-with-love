// hooks
import { useApi } from "@/hooks";
// components
import TopMVFirstItem from "../components/TopMVFirstItem";
import TopMVItem from "../components/TopMVItem";

// another
import styles from "./TopMVItems.module.scss";

const TopMVItems = () => {
  const { res } = useApi("topmvs");

  const firstVideo = res[0];
  const topVideos = res.slice(1);

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
