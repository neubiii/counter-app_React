import "./logs.css";

const Logs = (props) => {
  const { logsData, deleteLogs } = props;
  return logsData.map((log) => {
    return (
      <div
        className="log_info"
        data-testid="log_info"
        key={log.id}
        onClick={() => deleteLogs(log.id)}
      >
        <p>{log.value}</p>
      </div>
    );
  });
};
export default Logs;
