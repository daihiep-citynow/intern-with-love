import secondItems from "@/mocks/topic-event/second-items";

const initialState = {
  list: secondItems,
};

const secondItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default secondItemsReducer;
