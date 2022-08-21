// components
import HotSongItem from "../components/HotSongItem";
// another
import styles from "./HotSongItems.module.scss";

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
  {
    id: 6,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 7,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 8,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 9,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 10,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 11,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
  {
    id: 12,
    title: "Million Dollar Boy",
    artist: "16 Typh",
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
    traffic: 1233,
  },
];

const HotSongItems = () => (
  <div className={styles["hot-song-items-wrapper"]}>
    {items.map(({ id, title, artist, src, traffic }) => (
      <HotSongItem key={id} title={title} artist={artist} src={src} traffic={traffic} />
    ))}
  </div>
);

export default HotSongItems;
