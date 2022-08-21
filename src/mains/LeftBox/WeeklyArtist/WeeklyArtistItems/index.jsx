// components
import WeeklyArtistItem from "../components/WeeklyArtistItem";
// another
import styles from "./WeeklyArtistItems.module.scss";

const items = [
  {
    id: 1,
    artist: "T.A.P",
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/03/22/2/2/c/b/1647915878760_600.jpg",
  },
  {
    id: 2,
    artist: "Rincy",
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/07/01/7/0/a/2/1656671134067_600.jpg",
  },
  {
    id: 3,
    artist: "TCEE",
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/07/01/7/0/a/2/1656671003063_600.jpg",
  },
  {
    id: 4,
    artist: "Miu Lê",
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2020/08/03/3/f/4/5/1596425552929_600.jpg",
  },
  {
    id: 5,
    artist: "Hứa Kim Tuyền",
    src: "https://avatar-ex-swe.nixcdn.com/singer/avatar/2021/03/30/c/2/0/6/1617079270471_600.jpg",
  },
];

const WeeklyArtistItems = () => (
  <div className={styles["weekly-artist-items-wrapper"]}>
    {items.map(({ id, artist, src }) => (
      <WeeklyArtistItem key={id} artist={artist} src={src} />
    ))}
  </div>
);

export default WeeklyArtistItems;
