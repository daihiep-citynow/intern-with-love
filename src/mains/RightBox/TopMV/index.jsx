// components
import TopMVHeader from "./TopMVHeader";
import TopNav from "../components/TopNav";
import TopMVItems from "./TopMVItems";
// another
import styles from "./TopMV.module.scss";

const TopMV = () => (
  <div>
    <TopMVHeader />
    <TopNav />
    <TopMVItems />
  </div>
);

export default TopMV;
