// components
import TopVideoHeader from "../components/TopVideoHeader";
import TopNav from "../components/TopNav";
import TopVideoItems from "../components/TopVideoItems";
// another
import styles from "./TopVideo.module.scss";

const TopVideo = () => (
  <div className={styles["top-video-wrapper"]}>
    <TopVideoHeader />
    <TopNav />
    <TopVideoItems />
  </div>
);

export default TopVideo;
