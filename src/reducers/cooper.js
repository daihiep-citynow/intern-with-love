import cooper from "@/mocks/cooper";

const initialState = {
  list: cooper,
};

const cooperReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cooperReducer;
