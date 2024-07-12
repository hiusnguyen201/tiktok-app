import { useState, useEffect, useRef, memo } from "react";
import classNames from "classnames/bind";
import HeadlessTippy from "@tippyjs/react/headless";

import * as searchService from "~/services/searchService";
import { CloseIcon, LoadingIcon, SearchIcon } from "~/components/Icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import SuggestAccountItem from "~/components/SuggestAccountItem";
import { useDebounce } from "~/hooks";

import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

function Search() {
  const [keyword, setKeyword] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [tabbed, setTabbed] = useState(false);

  const debouncedValue = useDebounce(keyword, 600);

  const inputRef = useRef();

  const handleClear = () => {
    setKeyword("");
    inputRef.current.focus();
    setSearchResult([]);
  };

  const handleHideSearchResult = () => {
    setShowResult(false);
  };

  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setKeyword(searchValue);
    }
  };

  useEffect(() => {
    if (!keyword) return;

    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);

      const result = await searchService.search(keyword);
      setSearchResult(result);

      setLoading(false);
    };

    fetchApi();
  }, [debouncedValue]);

  const handleFocus = (e) => {
    setShowResult(true);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Tab") setTabbed(true);
  };

  const handleBlur = (e) => {
    if (tabbed) setTabbed(false);
  };

  return (
    // Using <div> around the reference element solves
    // this by creating a new parentNode context.
    <div className={cx("search-box")}>
      <HeadlessTippy
        interactive
        visible={showResult && searchResult.length > 0}
        render={(attrs) => (
          <div className={cx("search-result-box")} {...attrs}>
            <PopperWrapper>
              <h3 className={cx("search-title")}>Accounts</h3>
              {searchResult.map((item) => (
                <SuggestAccountItem key={item.id} data={item} />
              ))}
            </PopperWrapper>
          </div>
        )}
        onClickOutside={handleHideSearchResult}
      >
        <form action="/search" className={cx("search-form")}>
          <input
            className={cx("search-input")}
            ref={inputRef}
            value={keyword}
            placeholder="Search"
            spellCheck={false}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyUp={handleKeyUp}
          />

          <div className={cx("outline", { tabbed })}></div>

          <div className={cx("icons-container")}>
            {!!keyword && !loading && (
              <button onClick={handleClear} className={cx("clear-btn")}>
                <CloseIcon />
              </button>
            )}

            {loading && <LoadingIcon className={cx("loading-icon")} />}
          </div>

          <div className={cx("separate")}></div>

          <button type="click" className={cx("search-btn")}>
            <SearchIcon />
          </button>
        </form>
      </HeadlessTippy>
    </div>
  );
}

export default memo(Search);
