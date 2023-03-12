import LogTable from "./LogsTable";

const LogsPage = () => {
  return (
    <div className="log-container">
      <div className="log-toolbar">
        <h1>Logs paradise</h1>
        <input className="log-tool" type="button" value="Refresh" />
        <input className="log-tool" type="text" placeholder="Search..." />
      </div>
      <LogTable />
    </div>
  );
};

export default LogsPage;
