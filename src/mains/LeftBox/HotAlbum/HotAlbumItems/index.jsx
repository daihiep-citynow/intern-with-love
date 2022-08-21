// components
import HotAlbumItem from "../components/HotAlbumItem";
// another
import styles from "./HotAlbumItems.module.scss";

const items = [
  {
    id: 1,
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  },
  {
    id: 2,
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  },
  {
    id: 3,
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  },
  {
    id: 4,
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  },
  {
    id: 5,
    src: "https://avatar-ex-swe.nixcdn.com/song/2022/08/16/f/3/3/4/1660617737344.jpg",
  },
];

const HotSongItems = () => (
  <div className={styles["hot-album-items-wrapper"]}>
    {items.map(({ id, src }) => (
      <HotAlbumItem key={id} src={src} />
    ))}
  </div>
);

export default HotSongItems;
