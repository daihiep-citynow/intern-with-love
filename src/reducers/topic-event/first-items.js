import firstItems from "@/mocks/topic-event/first-items";

const initialState = {
  list: firstItems,
};

const firstItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default firstItemsReducer;
