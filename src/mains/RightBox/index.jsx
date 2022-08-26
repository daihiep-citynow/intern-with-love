// components
import TopSong from "./TopSong";
import TopVideo from "./TopVideo";
import PlayNow from "./PlayNow";
import HotTopics from "./HotTopic";

const RightBox = () => (
  <div className="right-wrapper">
    <TopSong />
    <TopVideo />
    <PlayNow />
    <HotTopics />
  </div>
);

export default RightBox;
