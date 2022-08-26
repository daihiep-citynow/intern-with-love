import { VIETNAMESE_SONG, KOREAN_SONG, AMERICAN_SONG } from "@/constants/top-song";

export const setVietnameseSong = (videos) => ({
  type: VIETNAMESE_SONG,
  payload: videos,
});

export const setKoreanSong = (videos) => ({
  type: KOREAN_SONG,
  payload: videos,
});

export const setAmericanSong = (videos) => ({
  type: AMERICAN_SONG,
  payload: videos,
});

export default {
  setVietnameseSong,
  setKoreanSong,
  setAmericanSong,
};
