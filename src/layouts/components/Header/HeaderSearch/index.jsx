// libs
import { useRef, useState, useEffect, useCallback } from "react";
import { SearchOutlined, LoadingOutlined, CloseCircleOutlined } from "@ant-design/icons";
import HeadlessTippy from "@tippyjs/react/headless";
import axios from "axios";
// hooks
import { useDebounce } from "@/hooks";
// others
import styles from "./HeaderSearch.module.scss";

const HeaderSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const debounced = useDebounce(searchValue, 300);

  const inputRef = useRef();

  const handleClear = () => {
    setSearchValue("");
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideResult = () => {
    setShowResult(false);
  };

  const fetchData = useCallback(async () => {
    setLoading(true);
    const options = {
      method: "GET",
      url: "api/search-song",
    };

    const { data } = await axios(options);

    setSearchResult(data.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!debounced.trim()) {
      setSearchResult([]);
      return;
    }

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  return (
    <div className={styles["header-search-wrapper"]}>
      <div className={styles["header-search-icon"]}>
        <SearchOutlined />
      </div>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        onClickOutside={handleHideResult}
        render={() => (
          <div className={styles["header-search-result-items"]}>
            {searchResult.map((item, index) => (
              <div key={item.id} className={styles["header-search-result-item"]}>
                <span>{`${index + 1}. ${item.title}`}</span>
              </div>
            ))}
          </div>
        )}
      >
        <div className={styles["header-search-input-wrapper"]}>
          <input
            className={styles["header-search-input"]}
            placeholder="T??m ki???m"
            ref={inputRef}
            value={searchValue}
            spellCheck={false}
            onChange={(e) => setSearchValue(e.target.value)}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <div onClick={handleClear} className={styles["header-search-state"]} aria-hidden="true">
              <CloseCircleOutlined />
            </div>
          )}
          {loading && (
            <div className={styles["header-search-state"]}>
              <LoadingOutlined />
            </div>
          )}
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default HeaderSearch;
