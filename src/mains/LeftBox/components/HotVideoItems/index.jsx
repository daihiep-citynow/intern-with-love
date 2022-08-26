// libs
import { useSelector } from "react-redux";
// components
import HotVideoLargeItem from "../HotVideoLargeItem";
import HotVideoItem from "../HotVideoItem";
// another
import styles from "./HotVideoItems.module.scss";

const HotVideoItems = () => {
  const hotVideo = useSelector((state) => state.hotVideo.list.slice(2));

  return (
    <div className={styles["hot-video-items"]}>
      <HotVideoLargeItem index={0} />
      <HotVideoLargeItem index={1} />
      {hotVideo.map(({ id }, index) => (
        <HotVideoItem key={id} index={index} />
      ))}
    </div>
  );
};

export default HotVideoItems;
