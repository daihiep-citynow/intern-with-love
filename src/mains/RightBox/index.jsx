// components
import TopSong from "./TopSong";
import TopMV from "./TopMV";
import PlayNow from "./PlayNow";
import HotTopics from "./HotTopics";

const RightBox = () => (
  <div className="right-wrapper">
    <TopSong />
    <TopMV />
    <PlayNow />
    <HotTopics />
  </div>
);

export default RightBox;
