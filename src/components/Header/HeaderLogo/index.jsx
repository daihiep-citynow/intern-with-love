import Link from "next/link";
import Image from "next/image";

import styles from "./HeaderLogo.module.scss";

const HeaderLogo = () => (
  <div className={styles["header-logo-wrapper"]}>
    <Link href="/">
      <a className={styles["header-logo-link"]}>
        <Image
          src="https://stc-id.nixcdn.com/v11/images/header_new/logo_new.png"
          alt="logo"
          width="64px"
          height="32px"
          objectFit="contain"
        />
      </a>
    </Link>
  </div>
);

export default HeaderLogo;
