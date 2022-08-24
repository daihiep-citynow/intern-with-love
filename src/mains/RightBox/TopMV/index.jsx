// components
import TopMVHeader from "../components/TopMVHeader";
import TopNav from "../components/TopNav";
import TopMVItems from "../components/TopMVItems";
// another
import styles from "./TopMV.module.scss";

const TopMV = () => (
  <div className={styles["top-mv-wrapper"]}>
    <TopMVHeader />
    <TopNav />
    <TopMVItems />
  </div>
);

export default TopMV;
