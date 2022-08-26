import carousel from "@/mocks/carousel";

const initialState = {
  list: carousel,
};

const carouselReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default carouselReducer;
