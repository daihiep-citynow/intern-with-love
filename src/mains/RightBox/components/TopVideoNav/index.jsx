// libs
import classnames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
// action
import { setAmericanVideo, setKoreanVideo, setVietnameseVideo } from "@/actions/top-video";
// const
import { VIETNAMESE_VIDEO, AMERICAN_VIDEO, KOREAN_VIDEO } from "@/constants/top-video";
// data
import topVideo from "@/mocks/top-video";
// another
import styles from "./TopVideoNav.module.scss";

const TopVideoNav = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(VIETNAMESE_VIDEO);

  const fetchVietnameseVideos = () => {
    if (active === VIETNAMESE_VIDEO) {
      return;
    }

    dispatch(setVietnameseVideo(topVideo.vietnamese));
    setActive(VIETNAMESE_VIDEO);
  };

  const fetchAmericanVideos = () => {
    if (active === AMERICAN_VIDEO) {
      return;
    }

    dispatch(setAmericanVideo(topVideo.american));
    setActive(AMERICAN_VIDEO);
  };

  const fetchKoreanVideos = () => {
    if (active === KOREAN_VIDEO) {
      return;
    }

    dispatch(setKoreanVideo(topVideo.korean));
    setActive(KOREAN_VIDEO);
  };

  return (
    <div className={styles["right-box-nav"]}>
      <div
        onClick={fetchVietnameseVideos}
        className={classnames(styles["right-box-nav-item-left"], styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === VIETNAMESE_VIDEO,
        })}
        aria-hidden="true"
      >
        Việt Nam
      </div>
      <div
        onClick={fetchAmericanVideos}
        className={classnames(styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === AMERICAN_VIDEO,
        })}
        aria-hidden="true"
      >
        Âu Mỹ
      </div>
      <div
        onClick={fetchKoreanVideos}
        className={classnames(styles["right-box-nav-item-right"], styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === KOREAN_VIDEO,
        })}
        aria-hidden="true"
      >
        Hàn Quốc
      </div>
    </div>
  );
};

export default TopVideoNav;
