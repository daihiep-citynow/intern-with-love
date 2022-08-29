// libs
import { useSelector, useDispatch } from "react-redux";
import { Spin } from "antd";
import { useEffect } from "react";
// data
import data from "@/mocks/weekly-artist";
// const
import { artistFetch, artistLoading } from "@/actions/WeeklyArtist";
// components
import WeeklyArtistItem from "../WeeklyArtistItem";

// another
import styles from "./WeeklyArtistItems.module.scss";

const WeeklyArtistItems = () => {
  const dispatch = useDispatch();
  const weeklyArtist = useSelector((state) => state.weeklyArtist.list);
  const isLoading = useSelector((state) => state.weeklyArtist.isLoading);

  useEffect(() => {
    let timeoutId;
    const intervalId = setInterval(() => {
      dispatch(artistLoading());

      timeoutId = setTimeout(() => {
        dispatch(artistFetch(data));
      }, 2000);
    }, 5000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles["weekly-artist-items-wrapper"]}>
      {isLoading ? (
        <Spin />
      ) : (
        weeklyArtist.map(({ id }, index) => <WeeklyArtistItem key={id} index={index} />)
      )}
    </div>
  );
};
export default WeeklyArtistItems;
