// components
import HotVideoLargeItem from "../components/HotVideoLargeItem";
import HotVideoItem from "../components/HotVideoItem";

// another
import styles from "./HotVideoItems.module.scss";

const videos = [
  {
    id: 1,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/04/d/1/5/5/1656903740420_268.jpg",
    artist: "MONO, Onionn",
    traffic: 12312,
    duration: "2:23",
  },
  {
    id: 2,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/08/08/1/7/f/b/1659944306112_268.jpg",
    artist: "Jack - J97",
    traffic: 12312,
    duration: "4:32",
  },
  {
    id: 3,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/06/20/d/1/b/3/1655723081315_268.jpg",
    artist: "Panic! at the Disco",
    traffic: 12312,
    duration: "3:54",
  },
  {
    id: 4,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/08/04/1/1/2/f/1659588656536_268.jpg",
    artist: "Bella Poarch",
    traffic: 12312,
    duration: "5:23",
  },
  {
    id: 5,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/19/7/0/0/a/1658217234353_268.jpg",
    artist: "Sean, Tweny",
    traffic: 12312,
    duration: "3:23",
  },
  {
    id: 6,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/23/3/5/f/0/1658563293950_268.jpg",
    artist: "MONO, Onionn",
    traffic: 12312,
    duration: "7:53",
  },
  {
    id: 7,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/08/16/f/4/9/a/1660624419287_268.jpg",
    artist: "Jack - J97",
    traffic: 12312,
    duration: "7:53",
  },
  {
    id: 8,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/19/e/2/c/4/1658237025700_268.jpg",
    artist: "Panic! at the Disco",
    traffic: 12312,
    duration: "7:53",
  },
];

const largeVideos = [
  {
    id: 9,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/06/13/9/5/5/b/1655100723598_640.jpg",
    artist: "Bella Poarch",
    traffic: 12312,
    duration: "7:53",
  },
  {
    id: 10,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/mv/2022/07/07/7/f/c/9/1657183063791_640.jpg",
    artist: "Sean, Tweny",
    traffic: 12312,
    duration: "7:53",
  },
];

const HotVideoItems = () => (
  <div className={styles["hot-video-items"]}>
    {largeVideos.map(({ id, title, src, artist, traffic, duration }) => (
      <HotVideoLargeItem
        key={id}
        title={title}
        src={src}
        artist={artist}
        traffic={traffic}
        duration={duration}
      />
    ))}
    {videos.map(({ id, title, src, artist, traffic, duration }) => (
      <HotVideoItem
        key={id}
        title={title}
        src={src}
        artist={artist}
        traffic={traffic}
        duration={duration}
      />
    ))}
  </div>
);

export default HotVideoItems;
