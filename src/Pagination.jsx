import { useEffect, useRef, useState } from "react";

const Pagination = (props) => {
  const {
    pageLimit,
    pagesCount,
    currentPage,
    handlePageChange,
    handleLimitChange,
    sortingStyle,
    handleSortingChange,
  } = props;
  const [showPageInput, setShowPageInput] = useState(false);
  const [pageInput, setPageInput] = useState();
  const neightbours = 2;

  const inputRef = useRef();

  useEffect(() => {
    if (showPageInput) {
      inputRef.current.focus();
    }
  }, [showPageInput]);
  //generate list of pages for map
  const generatePages = () => {
    const pages = [];
    pages.push("Prev");
    if (pagesCount > 2 * neightbours + 1) {
      //always display first page
      pages.push(1);
      //handle <- [1] [2] {3} else <- [1] [...] [4] [5] {6}
      if (currentPage > neightbours + 1) {
        pages.push("...");
      }
      //starting pages
      let left = currentPage > neightbours ? currentPage - neightbours : 1;
      //ending pages
      let right =
        currentPage + neightbours < pagesCount - 1
          ? currentPage + neightbours
          : pagesCount - 2;
      //generate with loop
      for (let i = left; i <= right; i++) {
        pages.push(i + 1);
      }
      //handle {4} [5] [6] -> else {1} [2] [3] [...] [6]
      if (currentPage + neightbours < pagesCount - 2) pages.push("...");
      //always display last page
      pages.push(pagesCount);
    } else {
      //if not enought pages just generate from 0 to pages count
      for (let i = 0; i < pagesCount; i++) {
        pages.push(i + 1);
      }
    }
    pages.push("Next");
    return pages;
  };

  const pages = generatePages();
  const onInputChange = (e) => {
    console.log();
    setPageInput(e.target.value.replace(/\D/, ""));
  };

  const handleKeyDown = (e) => {
    if (e.key == "Enter" && e.target.value) {
      onMoreButtonPress();
      handlePageChange(e);
    }
  };
  const onMoreButtonPress = () => {
    setShowPageInput((prev) => !prev);
  };
  return (
    <div className="pag-nav">
      <div className="pag-set">
        <label htmlFor="pageLimit">Показать по: </label>
        <select onChange={handleLimitChange} value={pageLimit} id="pageLimit">
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
        </select>
      </div>
      <div className="pag-but-group">
        {pagesCount > 1
          ? pages.map((value, index) => {
              if (value === "Prev")
                return (
                  <input
                    type="button"
                    key={index}
                    onClick={handlePageChange}
                    value={value}
                    disabled={currentPage <= 0}
                  />
                );
              if (value === "Next")
                return (
                  <input
                    type="button"
                    key={index}
                    onClick={handlePageChange}
                    value={value}
                    disabled={currentPage + 1 >= pagesCount}
                  />
                );
              if (value === "...")
                return showPageInput ? (
                  <input
                    ref={inputRef}
                    type="number"
                    value={pageInput}
                    placeholder={"to..."}
                    onBlur={onMoreButtonPress}
                    onChange={onInputChange}
                    onKeyDown={handleKeyDown}
                  />
                ) : (
                  <input
                    type="button"
                    key={index}
                    onClick={onMoreButtonPress}
                    value={"..."}
                  />
                );
              return (
                <input
                  type="button"
                  key={index}
                  onClick={handlePageChange}
                  value={value}
                  className={currentPage + 1 === value ? "active" : ""}
                />
              );
            })
          : null}
      </div>
      <div className="pag-set">
        <label htmlFor="sortingStyle">Сортировка: </label>
        <select
          onChange={handleSortingChange}
          value={sortingStyle}
          id="sortingStyle"
        >
          <option value={"new"}>Сначала новые</option>
          <option value={"old"}>Сначала старые</option>
          <option value={"date"}>В диапазоне дат</option>
        </select>
        {sortingStyle === "date" ? (
          <div className="date-toolbox">
            <label htmlFor="start">С: </label>
            <input id="start" type="date" />
            <label htmlFor="end"> по: </label>
            <input id="end" type="date" />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Pagination;
