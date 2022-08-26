import hotTopic from "@/mocks/hot-topic";

const initialState = {
  list: hotTopic,
};

const hotTopicReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default hotTopicReducer;
