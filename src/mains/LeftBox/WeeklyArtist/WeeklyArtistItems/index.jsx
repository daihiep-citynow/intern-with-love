// components
import WeeklyArtistItem from "../components/WeeklyArtistItem";
// another
import styles from "./WeeklyArtistItems.module.scss";

const items = [
  {
    id: 1,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 2,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 3,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 4,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 5,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
];

const WeeklyArtistItems = () => (
  <div className={styles["weekly-artist-items-wrapper"]}>
    {items.map(({ id /* , title, artist, src, traffic  */ }) => (
      <WeeklyArtistItem key={id} />
    ))}
  </div>
);

export default WeeklyArtistItems;
