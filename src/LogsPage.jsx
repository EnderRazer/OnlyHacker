import { useSelector } from "react-redux";
import LogCard from "./LogCard";

const LogsPage = () => {
  const logsArray = useSelector((state) => state.logSlice.value.logs);
  console.log(logsArray);
  return (
    <div className="log-container">
      {logsArray.map((log) => (
        <LogCard data={log} key={log.dt} />
      ))}
    </div>
  );
};

export default LogsPage;
