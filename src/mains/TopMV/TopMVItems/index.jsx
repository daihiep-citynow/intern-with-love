// libraries
import { useState, useEffect } from "react";
import axios from "axios";
// components
import TopMVFirstItem from "../components/TopMVFirstItem";
import TopMVItem from "../components/TopMVItem";
// another
import styles from "./TopMVItems.module.scss";

const TopMVItems = () => {
  const [firstMV, setFirstMV] = useState({});
  const [topVideos, setTopVideos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: "GET",
        url: "topmvs",
      };

      const { data } = await axios(options);

      setFirstMV(data[0]);
      setTopVideos(data.slice(1));
    };

    fetchData();
  }, []);

  return (
    <div className={styles["top-mv-items"]}>
      <TopMVFirstItem image={firstMV.image} title={firstMV.title} artist={firstMV.artist} />
      {topVideos.map((video) => (
        <TopMVItem key={video.id} image={video.image} title={video.title} artist={video.artist} />
      ))}
    </div>
  );
};

export default TopMVItems;
