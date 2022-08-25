export const setCarousel = (carousel) => ({
  type: "SET_CAROUSEL",
  payload: carousel,
});

export const addCarousel = (carousel) => ({
  type: "ADD_CAROUSEL",
  payload: carousel,
});

export default {
  setCarousel,
  addCarousel,
};
