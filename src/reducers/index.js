// libs
import { combineReducers } from "redux";
// components
import carouselReducer from "./carousel";
import topSongReducer from "./top-song";
import topVideoReducer from "./top-video";
import hotTopicReducer from "./hot-topic";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  topSong: topSongReducer,
  topVideo: topVideoReducer,
  hotTopic: hotTopicReducer,
});

export default rootReducer;
