import weeklyArtist from "@/mocks/weekly-artist";

const initialState = {
  list: weeklyArtist,
};

const weeklyArtistReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default weeklyArtistReducer;
