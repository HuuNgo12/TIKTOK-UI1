import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import HeadlessTippy from "@tippyjs/react/headless";
import { useState, useEffect, useRef } from "react";
import { useDebounced } from "../../../../hooks";
import { wrapper as ProperWrapper } from "../../../Proper";
import AccountsItem from "../../../AccountsItems";
import { SearchIcon } from "../../../../components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import * as searchService from "../../../../ApiService/searchService";

import styles from "./Search.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setloading] = useState(false);

  const debounced = useDebounced(searchValue, 500);

  const inputRef = useRef();

  useEffect(() => {
    if (!debounced.trim()) {
      return setSearchResult([]);
    }

    const fetchApi = async () => {
      setloading(true);
      const result = await searchService.search(debounced);
      setSearchResult(result);
      setloading(false);
    };
    fetchApi();
  }, [debounced]);

  const handlerCLear = () => {
    setSearchValue("");
    setSearchResult([]);
    inputRef.current.focus();
  };
  const handlerHideResults = () => {
    setShowResult(false);
  };
  const handlerChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };

  return (
    <div>
      <HeadlessTippy
        visible={showResult && searchResult.length > 0}
        interactive={true}
        render={(attrs) => (
          <div className={cx("search-reult")} tabIndex="-1" {...attrs}>
            <ProperWrapper>
              <h4 className={cx("search-title")}>Accounts</h4>
              {searchResult.map((result) => (
                <AccountsItem key={result.id} data={result} />
              ))}
            </ProperWrapper>
          </div>
        )}
        onClickOutside={handlerHideResults}
      >
        <div className={cx("search")}>
          <input
            ref={inputRef}
            value={searchValue}
            placeholder="Search for acounts and videos"
            spellCheck={false}
            onChange={handlerChange}
            onFocus={() => setShowResult(true)}
          />
          {!!searchValue && !loading && (
            <button className={cx("clear")} onClick={handlerCLear}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
          )}

          {loading && (
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
          )}

          <button
            className={cx("search-btn")}
            onMouseDown={(e) => e.preventDefault()}
          >
            <SearchIcon />
          </button>
        </div>
      </HeadlessTippy>
    </div>
  );
}

export default Search;
