// libs
import { useSelector } from "react-redux";
// components
import ImageLink from "@/components/ImageLink";
// another
import styles from "./HotTopicItem.module.scss";

const HotTopicItem = ({ index }) => {
  const hotTopic = useSelector((state) => state.hotTopic.list);

  return (
    <div className={styles["hot-topics-item"]}>
      <ImageLink src={hotTopic[index].image} href={hotTopic[index].href} width={300} height={100} />
    </div>
  );
};

export default HotTopicItem;
