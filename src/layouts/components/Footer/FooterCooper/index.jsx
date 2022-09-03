// libs
import { useSelector } from "react-redux";
// components
import CooperImage from "../components/CooperImage";
// another
import styles from "./FooterCooper.module.scss";

const FooterCooper = () => {
  const cooperList = useSelector((state) => state.cooper.list);

  return (
    <div className={styles["footer-cooper-wrapper"]}>
      <div className={styles["footer-cooper-inner"]}>
        <div className={styles["footer-cooper-title"]}>LIÊN KẾT VÀ HỢP TÁC</div>
        <div className={styles["footer-cooper-items"]}>
          {cooperList.map(({ id, image }) => (
            <CooperImage key={id} src={image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterCooper;
