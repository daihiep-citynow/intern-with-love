import { VIETNAMESE_VIDEO, KOREAN_VIDEO, AMERICAN_VIDEO } from "@/constants/top-video";

export const setVietnameseVideo = (videos) => ({
  type: VIETNAMESE_VIDEO,
  payload: videos,
});

export const setKoreanVideo = (videos) => ({
  type: KOREAN_VIDEO,
  payload: videos,
});

export const setAmericanVideo = (videos) => ({
  type: AMERICAN_VIDEO,
  payload: videos,
});

export default {
  setVietnameseVideo,
  setKoreanVideo,
  setAmericanVideo,
};
