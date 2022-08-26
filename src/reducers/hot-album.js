import hotAlbum from "@/mocks/hot-album";

const initialState = {
  list: hotAlbum,
};

const hotAlbumReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default hotAlbumReducer;
