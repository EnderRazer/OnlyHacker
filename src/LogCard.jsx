const LogCard = (props) => {
  const log = props.data;
  return (
    <div className="log-card">
      <div className="cell">
        {log.dt}
      </div>
      <hr></hr>
      <div className="cell">
        {log.type}
      </div>
      <hr></hr>
      <div className="cell">
        {log.name}
      </div>
      <hr></hr>
      <div className="cell">
        {log.message}
      </div>
      <hr></hr>
      <div className="cell">
        {log.allowed ? "True" : "False"}
      </div>
    </div>
  );
};
export default LogCard;
