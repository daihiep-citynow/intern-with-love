// libs
import classnames from "classnames";
import { useState } from "react";
import { useDispatch } from "react-redux";
// actions
import { setKoreanSong, setVietnameseSong, setAmericanSong } from "@/actions/top-song";
// data
import topSong from "@/mocks/top-song";
// const
import { VIETNAMESE_SONG, AMERICAN_SONG, KOREAN_SONG } from "@/constants/top-song";
// another
import styles from "./TopSongNav.module.scss";

const TopNav = () => {
  const dispatch = useDispatch();
  const [active, setActive] = useState(VIETNAMESE_SONG);

  const fetchVietnameseSongs = () => {
    if (active === VIETNAMESE_SONG) {
      return;
    }

    dispatch(setVietnameseSong(topSong.vietnamese));
    setActive(VIETNAMESE_SONG);
  };

  const fetchAmericanSongs = () => {
    if (active === AMERICAN_SONG) {
      return;
    }

    dispatch(setAmericanSong(topSong.american));
    setActive(AMERICAN_SONG);
  };

  const fetchKoreanSongs = () => {
    if (active === KOREAN_SONG) {
      return;
    }

    dispatch(setKoreanSong(topSong.korean));
    setActive(KOREAN_SONG);
  };

  return (
    <div className={styles["right-box-nav"]}>
      <div
        onClick={fetchVietnameseSongs}
        className={classnames(styles["right-box-nav-item-left"], styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === VIETNAMESE_SONG,
        })}
        aria-hidden="true"
      >
        Việt Nam
      </div>
      <div
        onClick={fetchAmericanSongs}
        className={classnames(styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === AMERICAN_SONG,
        })}
        aria-hidden="true"
      >
        Âu Mỹ
      </div>
      <div
        onClick={fetchKoreanSongs}
        className={classnames(styles["right-box-nav-item-right"], styles["right-box-nav-item"], {
          [styles["right-box-nav-item-active"]]: active === KOREAN_SONG,
        })}
        aria-hidden="true"
      >
        Hàn Quốc
      </div>
    </div>
  );
};

export default TopNav;
