// data
import topVideo from "@/mocks/top-video";
// const
import { VIETNAMESE_VIDEO, AMERICAN_VIDEO, KOREAN_VIDEO } from "@/constants/top-video";

const initialState = {
  list: topVideo,
};

const topVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIETNAMESE_VIDEO: {
      return state;
    }

    case AMERICAN_VIDEO: {
      return state;
    }

    case KOREAN_VIDEO: {
      return state;
    }

    default:
      return state;
  }
};

export default topVideoReducer;
