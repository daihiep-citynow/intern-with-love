// data
import topVideo from "@/mocks/top-video";
// const
import { VIETNAMESE_VIDEO, AMERICAN_VIDEO, KOREAN_VIDEO } from "@/constants/top-video";

const initialState = {
  list: topVideo.vietnamese,
};

const topVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    case VIETNAMESE_VIDEO: {
      return { list: action.payload };
    }

    case AMERICAN_VIDEO: {
      return { list: action.payload };
    }

    case KOREAN_VIDEO: {
      return { list: action.payload };
    }

    default:
      return state;
  }
};

export default topVideoReducer;
