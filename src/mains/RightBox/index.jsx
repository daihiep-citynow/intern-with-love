// components
import TopSong from "./TopSong";
import TopVideo from "./TopVideo";
import PlayNow from "./PlayNow";
import HotTopics from "./HotTopics";

const RightBox = () => (
  <div className="right-wrapper">
    <TopSong />
    <TopVideo />
    <PlayNow />
    <HotTopics />
  </div>
);

export default RightBox;
