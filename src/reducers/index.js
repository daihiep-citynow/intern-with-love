// libs
import { combineReducers } from "redux";
// components
import carouselReducer from "./carousel";
import topSongReducer from "./top-song";

const rootReducer = combineReducers({
  carousel: carouselReducer,
  topSong: topSongReducer,
});

export default rootReducer;
