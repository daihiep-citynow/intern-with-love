import { SearchOutlined } from "@ant-design/icons";

import styles from "./HeaderSearch.module.css";

const HeaderSearch = () => (
  <div className={styles["header-search-wrapper"]}>
    <div className={styles["header-search-icon"]}>
      <SearchOutlined />
    </div>
    <input className={styles["header-search-input"]} type="text" placeholder="Tìm kiếm" />
  </div>
);

export default HeaderSearch;
