// components
import TopicEventOneItem from "../components/TopicEventOneItem";
// another
import styles from "./TopicEventOneItems.module.scss";

const mocks = [
  {
    id: 1,
    title: "Kill This Love (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  },
  {
    id: 2,
    title: "The Alchemist (Mini Album) The Alchemist (Mini Album) The Alchemist (Mini Album)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  },
  {
    id: 3,
    title: "Pink Venom (Single)",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  },
  {
    id: 4,
    title: "BLACKPINK 2020 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  },
  {
    id: 5,
    title: "BLACKPINK 2021 THE SHOW LIVE",
    src: "https://avatar-ex-swe.nixcdn.com/playlist/2020/06/09/4/0/2/6/1591694185737_300.jpg",
  },
];

const TopEventOneItems = () => (
  <div className={styles["topic-event-one-items"]}>
    {mocks.map(({ id, src, title }) => (
      <TopicEventOneItem key={id} src={src} title={title} />
    ))}
  </div>
);

export default TopEventOneItems;
