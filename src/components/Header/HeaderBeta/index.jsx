import Image from "next/image";
import Link from "next/link";

import styles from "./HeaderBeta.module.css";

const HeaderBeta = () => (
  <div className={styles["header-beta-wrapper"]}>
    <Link href="/">
      <a className={styles["header-beta-link"]}>
        <Image
          src="https://stc-id.nixcdn.com/v11/images/ic_new.png"
          alt="beta"
          width="96px"
          height="32px"
          objectFit="contain"
        />
      </a>
    </Link>
  </div>
);

export default HeaderBeta;
