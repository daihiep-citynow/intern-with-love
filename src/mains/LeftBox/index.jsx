// components
import TopicEvent from "./TopicEvent";
import HotVideo from "./HotVideo";
import HotSongs from "./HotSong";
import HotAlbum from "./HotAlbum";

const LeftBox = () => (
  <div className="left-wrapper">
    <TopicEvent />
    <HotVideo />
    <HotSongs />
    <HotAlbum />
  </div>
);

export default LeftBox;
