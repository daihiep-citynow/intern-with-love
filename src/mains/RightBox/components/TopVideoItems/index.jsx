// libs
import { useSelector } from "react-redux";
// components
import TopVideoFirstItem from "../TopVideoFirstItem";
import TopVideoItem from "../TopVideoItem";
// another
import styles from "./TopVideoItems.module.scss";

const TopVideoItems = () => {
  const topVideo = useSelector((state) => state.topVideo.list);

  return (
    <div className={styles["top-video-items"]}>
      {topVideo.map(({ id }, index) => {
        if (index) {
          return <TopVideoItem key={id} index={index} />;
        }
        return <TopVideoFirstItem key={id} />;
      })}
    </div>
  );
};

export default TopVideoItems;
