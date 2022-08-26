import hotSong from "@/mocks/hot-song";

const initialState = {
  list: hotSong,
};

const hotSongReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default hotSongReducer;
