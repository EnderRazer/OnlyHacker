import { useState } from "react";
import { useGetLogsQuery } from "./logsApi";
import LogCard from "./LogCard";
import Pagination from "./Pagination";

const LogTable = () => {
  console.log(import.meta.env.VITE_BASE_URL)
  const [sortingStyle, setSortingStyle] = useState("new");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);
  const offset = currentPage * pageLimit;
  const { data: api = { logs: [], total: 0 }, isLoading } = useGetLogsQuery(
    { offset: offset, limit: pageLimit },
    { pollingInterval: 60000 }
  );
  const pagesCount = api.total ? Math.ceil(api.total / pageLimit) : 1;

  const handleLimitChange = (e) => {
    setPageLimit(e.target.value);
    setCurrentPage(0);
  };

  const handleSortingChange = (e) => {
    console.log(e.target);
    setSortingStyle(e.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = (e) => {
    switch (e.target.value) {
      case "Prev": {
        setCurrentPage(currentPage - 1);
        break;
      }
      case "Next": {
        setCurrentPage(currentPage + 1);
        break;
      }
      default: {
        let page = e.target.value - 1;
        if (page < 0) {
          setCurrentPage(0);
        } else if (page > pagesCount - 1) {
          setCurrentPage(pagesCount - 1);
        } else setCurrentPage(page);
      }
    }
  };

  if (isLoading)
    return (
      <div>
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div>
      <Pagination
        pageLimit={pageLimit}
        pagesCount={pagesCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        sortingStyle={sortingStyle}
        handleSortingChange={handleSortingChange}
      />
      <div className="log-header">
        <div className="cell">
          <p>Datetime</p>
        </div>
        <hr></hr>
        <div className="cell">
          <p>Type</p>
        </div>
        <hr></hr>
        <div className="cell">
          <p>Username</p>
        </div>
        <hr></hr>
        <div className="cell">
          <p>Message</p>
        </div>
        <hr></hr>
        <div className="cell">
          <p>Allowed</p>
        </div>
      </div>
      {api.logs.map((log) => (
        <LogCard data={log} key={log.id} />
      ))}
      <Pagination
        pageLimit={pageLimit}
        pagesCount={pagesCount}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        handleLimitChange={handleLimitChange}
        sortingStyle={sortingStyle}
        handleSortingChange={handleSortingChange}
      />
    </div>
  );
};

export default LogTable;
