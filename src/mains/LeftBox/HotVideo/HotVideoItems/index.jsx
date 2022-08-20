// components
import HotVideoLargeItem from "../components/HotVideoLargeItem";
import HotVideoItem from "../components/HotVideoItem";

// another
import styles from "./HotVideoItems.module.scss";

const mocks = [
  {
    id: 1,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "MONO, Onionn",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 2,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Jack - J97",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 3,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Panic! at the Disco",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 4,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Bella Poarch",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 5,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Sean, Tweny",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 6,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "MONO, Onionn",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 7,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Jack - J97",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 8,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Panic! at the Disco",
    traffic: 12312,
    duration: 432,
  },
];

const mocks1 = [
  {
    id: 9,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Bella Poarch",
    traffic: 12312,
    duration: 432,
  },
  {
    id: 10,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Sean, Tweny",
    traffic: 12312,
    duration: 432,
  },
];

const HotVideoItems = () => (
  <div className={styles["hot-video-items"]}>
    {mocks1.map(({ id, title, src, artist, traffic, duration }) => (
      <HotVideoLargeItem
        key={id}
        title={title}
        src={src}
        artist={artist}
        traffic={traffic}
        duration={duration}
      />
    ))}
    {mocks.map(({ id, title, src, artist, traffic, duration }) => (
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
