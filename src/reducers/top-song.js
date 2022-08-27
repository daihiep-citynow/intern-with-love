// data
import topSong from "@/mocks/top-song";
// const
import { VIETNAMESE_SONG, AMERICAN_SONG, KOREAN_SONG } from "@/constants/top-song";

const initialState = {
  list: topSong.vietnamese,
};

const topSongReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIETNAMESE_SONG: {
      return { list: action.payload };
    }

    case AMERICAN_SONG: {
      return { list: action.payload };
    }

    case KOREAN_SONG: {
      return { list: action.payload };
    }

    default:
      return state;
  }
};

export default topSongReducer;
