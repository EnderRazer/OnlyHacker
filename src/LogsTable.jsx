import { useState } from "react";
import { useSelector } from "react-redux";
import LogCard from "./LogCard";
import Pagination from "./Pagination";

const LogTable = () => {
  const logs = useSelector((state) => state.logs.value);

  const [currentPage, setCurrentPage] = useState(0);
  const [pageLimit, setPageLimit] = useState(10);

  const leftOffset = currentPage * pageLimit;
  const rightOffset = (currentPage + 1) * pageLimit;
  const current = logs.slice(leftOffset, rightOffset);
  const pageCount = Math.floor(logs.length / pageLimit) + 1;

  const handleLimitChange = (e) => {
    setPageLimit(e.target.value);
  };

  const handlePageChange = (e) => {
    switch(e.target.value){
        case 'Назад': {
            setCurrentPage(currentPage-1)
            break
        }
        case 'Вперед': {
            setCurrentPage(currentPage+1)
            break
        }
        default:
            setCurrentPage(e.target.value - 1);
    }
  };

  return (
    <div>
          <Pagination pageCount={pageCount} currentPage={currentPage} handlePageChange={handlePageChange} handleLimitChange={handleLimitChange}/>
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
      {current.map((log, i) => (
        <LogCard data={log} key={i} />
      ))}
      <Pagination pageCount={pageCount} currentPage={currentPage} handlePageChange={handlePageChange}/>
    </div>
  );
};

export default LogTable;
