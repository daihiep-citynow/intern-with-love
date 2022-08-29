// data
import { ARTIST_LOADING, ARTIST_FETCH, ARTIST_ERROR } from "@/constants/WeeklyArtist";

const initialState = {
  list: [],
  isLoading: true,
};

const weeklyArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTIST_LOADING:
      return {
        ...action.payload,
      };
    case ARTIST_FETCH:
      return {
        ...action.payload,
      };
    case ARTIST_ERROR:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default weeklyArtistReducer;
