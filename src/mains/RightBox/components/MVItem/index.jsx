// libraries
import classnames from "classnames";
// components
import TopMVImage from "../TopMVImage";
// another
import styles from "./MVItem.module.scss";

const MVItem = ({ mvType = false, title, artist, image }) => (
  <div
    className={classnames(styles["top-mv-item"], {
      [styles["top-mv-first-item"]]: mvType,
    })}
  >
    <div className={styles["top-mv-item-content"]}>
      {mvType ? (
        <>
          <div className={styles["top-mv-item-index"]}>
            <span>1</span>
          </div>
          <TopMVImage src={image} width={300} height={168} />
        </>
      ) : (
        <TopMVImage src={image} width={110} height={62} />
      )}
      <div className={styles["top-mv-item-title"]}>
        <span className={styles["top-mv-item-title-name"]}>{title}</span>
        <span className={styles["top-mv-item-title-artist"]}>{artist}</span>
      </div>
    </div>
  </div>
);

export default MVItem;
