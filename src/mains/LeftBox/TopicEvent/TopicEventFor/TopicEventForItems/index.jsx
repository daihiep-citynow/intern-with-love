// components
import TopicEventForItem from "../components/TopicEventForItem";
// another
import styles from "./TopicEventForItems.module.scss";

const mocks = [
  {
    id: 1,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "MONO, Onionn",
  },
  {
    id: 2,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Jack - J97",
  },
  {
    id: 3,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Panic! at the Disco",
  },
  {
    id: 4,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Bella Poarch",
  },
  {
    id: 5,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Sean, Tweny",
  },
  {
    id: 6,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "MONO, Onionn",
  },
  {
    id: 7,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Jack - J97",
  },
  {
    id: 8,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Panic! at the Disco",
  },
  {
    id: 9,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Bella Poarch",
  },
  {
    id: 10,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
    artist: "Sean, Tweny",
  },
];

const TopEventForItems = () => (
  <div className={styles["topic-event-for-items"]}>
    {mocks.map(({ id, src, title, artist }) => (
      <TopicEventForItem key={id} src={src} title={title} artist={artist} />
    ))}
  </div>
);

export default TopEventForItems;
