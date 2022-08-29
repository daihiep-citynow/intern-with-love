import { ARTIST_LOADING, ARTIST_FETCH, ARTIST_ERROR } from "@/constants/WeeklyArtist";

export const artistLoading = () => ({
  type: ARTIST_LOADING,
  payload: {
    isLoading: true,
  },
});

export const artistFetch = (videos) => ({
  type: ARTIST_FETCH,
  payload: {
    list: videos,
    isLoading: false,
  },
});

export const artistError = () => ({
  type: ARTIST_ERROR,
  payload: {
    isLoading: false,
  },
});

export default {
  artistLoading,
  artistFetch,
  artistError,
};
