// data
import topSong from "@/mocks/top-song";
// const
import { VIETNAMESE_SONG, AMERICAN_SONG, KOREAN_SONG } from "@/constants/top-song";

const initialState = {
  list: topSong,
};

const topSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIETNAMESE_SONG: {
      return state;
    }

    case AMERICAN_SONG: {
      return state;
    }

    case KOREAN_SONG: {
      return state;
    }

    default:
      return state;
  }
};

export default topSongReducer;
