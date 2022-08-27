// components
import TopVideoHeader from "../components/TopVideoHeader";
import TopVideoNav from "../components/TopVideoNav";
import TopVideoItems from "../components/TopVideoItems";
// another
import styles from "./TopVideo.module.scss";

const TopVideo = () => (
  <div className={styles["top-video-wrapper"]}>
    <TopVideoHeader />
    <TopVideoNav />
    <TopVideoItems />
  </div>
);

export default TopVideo;
