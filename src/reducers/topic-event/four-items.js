import fourItems from "@/mocks/topic-event/four-items";

const initialState = {
  list: fourItems,
};

const fourItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default fourItemsReducer;
