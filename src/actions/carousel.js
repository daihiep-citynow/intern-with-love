export const setCarousel = (carousel) => {
  return {
    type: "SET_CAROUSEL",
    payload: carousel,
  };
};

export const addCarousel = (carousel) => {
  return {
    type: "ADD_CAROUSEL",
    payload: carousel,
  };
};

export default {
  setCarousel,
  addCarousel,
};
