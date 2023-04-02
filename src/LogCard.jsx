const LogCard = (props) => {
  const log = props.data;
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("en-GB", options);
  return (
    <div className="log-card">
      <div className="cell">{formatter.format(new Date(log.dt))}</div>
      <hr></hr>
      <div className="cell">{log.sender_type}</div>
      <hr></hr>
      <div className="cell">{log.sender_name}</div>
      <hr></hr>
      <div title={log.message} className="cell">
        {log.message}
      </div>
      <hr></hr>
      <div className="cell">{log.allowed ? "True" : "False"}</div>
    </div>
  );
};
export default LogCard;
