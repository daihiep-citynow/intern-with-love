// components
import TopicEvent from "./TopicEvent";
import HotVideo from "./HotVideo";
import HotSongs from "./HotSong";
import HotAlbum from "./HotAlbum";
import WeeklyArtist from "./WeeklyArtist";

const LeftBox = () => (
  <div className="left-wrapper">
    <TopicEvent />
    <HotVideo />
    <HotSongs />
    <HotAlbum />
    <WeeklyArtist />
  </div>
);

export default LeftBox;
