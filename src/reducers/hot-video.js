import hotVideo from "@/mocks/hot-video";

const initialState = {
  list: hotVideo,
};

const hotVideoReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default hotVideoReducer;
