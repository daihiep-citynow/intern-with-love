import thirdItems from "@/mocks/topic-event/third-items";

const initialState = {
  list: thirdItems,
};

const thirdItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default thirdItemsReducer;
