import "./logs.css";

const Logs = (props) => {
  const { logsData, deleteLogs, toggleWarning } = props;
  return logsData.map((log) => {
    return (
      <div
        className="log_info"
        data-testid="log_info"
        key={log.id}
        onClick={() => deleteLogs(log.id)}
        onMouseEnter={()=> toggleWarning()}
        onMouseLeave={()=> toggleWarning()}
      >
        <p>{log.value}</p>
      </div>
    );
  });
};
export default Logs;
