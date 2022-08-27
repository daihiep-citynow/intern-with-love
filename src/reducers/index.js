// libs
import { combineReducers } from "redux";
// components
import carouselReducer from "./carousel";
import topSongReducer from "./top-song";
import topVideoReducer from "./top-video";
import hotTopicReducer from "./hot-topic";
import topicEventFirstReducer from "./topic-event/first-items";
import topicEventSecondReducer from "./topic-event/second-items";
import topicEventThirdReducer from "./topic-event/third-items";
import topicEventFourReducer from "./topic-event/four-items";
import hotVideoReducer from "./hot-video";
import hotSongReducer from "./hot-song";
import hotAlbumReducer from "./hot-album";
import weeklyArtistReducer from "./weekly-artist";
import cooperReducer from "./cooper";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  topSong: topSongReducer,
  topVideo: topVideoReducer,
  hotTopic: hotTopicReducer,
  topicEventFirst: topicEventFirstReducer,
  topicEventSecond: topicEventSecondReducer,
  topicEventThird: topicEventThirdReducer,
  topicEventFour: topicEventFourReducer,
  hotVideo: hotVideoReducer,
  hotSong: hotSongReducer,
  hotAlbum: hotAlbumReducer,
  weeklyArtist: weeklyArtistReducer,
  cooper: cooperReducer,
});

export default rootReducer;
