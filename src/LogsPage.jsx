import { useSelector } from "react-redux";
import LogCard from "./LogCard";

const LogsPage = () => {
  const logsArray = useSelector((state) => state.logSlice.value.logs);

  return (
    <div className="log-container">
        <div className="log-toolbar">
            <h1>Logs paradise</h1>
            <input className="log-tool" type="button" value="Refresh"/>
            <input className="log-tool" type="text" placeholder="Search..."/>
        </div>
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
      {logsArray.map((log) => (
        <LogCard data={log} key={log.dt} />
      ))}
    </div>
  );
};

export default LogsPage;
