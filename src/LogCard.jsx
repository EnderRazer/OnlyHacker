const LogCard = (props) => {
  const log = props.data;
  return (
    <div className="log-card">
      <div className="type">
        <p>{log.type}</p>
      </div>
      <hr></hr>
      <div className="username">
        <p>{log.name}</p>
      </div>
      <hr></hr>
      <div className="message">
        <p>{log.message}</p>
      </div>
      <hr></hr>
      <div className="datetime">
        <p>{log.dt}</p>
      </div>
      <hr></hr>
      <div className="allowed">
        <p>{log.allowed ? "True" : "False"}</p>
      </div>
    </div>
  );
};
export default LogCard;
