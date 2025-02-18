import React from "react";
import "./counter.css";
import Logs from "../logs/logs";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      incValue: 0,
      decValue: 0,
      logs: [],
      showLogs: false,
    };
  }
  handleCounter(sign) {
    const { counter, incValue, decValue, logs } = this.state;
    let oldValue = counter;
    let newValue = null;

    if (sign === "+") {
      newValue = counter + incValue;
      this.setState({
        counter: counter + incValue,
        incValue: 0,
      });
    }
    if (sign === "-") {
      newValue = counter - decValue;
      this.setState({
        counter: counter - decValue,
        decValue: 0,
      });
    }
    if (incValue > 0 || decValue > 0) {
      //Generate a Log
      let newLog = {
        id: Math.random(),
        value: `Previous Value = ${oldValue}, Value ${
          sign === "+" ? "Added" : "Subtracted"
        } = ${sign === "+" ? incValue : decValue}, New Value = ${newValue}`,
      };
      this.setState({ logs: [...logs, newLog] });
    }
  }
  handleOperation(event) {
    if (event.target.id === "value_inc") {
      // update the incValue state
      this.setState({ incValue: +event.target.value });
    } else {
      // update the decValue state
      this.setState({ decValue: +event.target.value });
    }
  }
  deleteLogs(id) {
    // based on the id received we delete the log from the counter state
    this.setState({ logs: this.state.logs.filter((logs) => logs.id !== id) });
  }

  render() {
    const { counter, incValue, decValue, logs, showLogs } = this.state;
    return (
      <div className="main">
        <div>
          <h1>Counter</h1>
        </div>
        <div>
          <h3 data-testid="counter-value">Value Of Counter : {counter}</h3>
        </div>
        <div className="buttons">
          <div className="action_section">
            <form>
              <input
                type="number"
                id="value_inc"
                placeholder="0"
                value={incValue}
                data-testid="value_inc"
                onChange={(event) => this.handleOperation(event)}
              ></input>
            </form>
            <button
              className="button button_inc"
              data-testid="button_inc"
              onClick={() => this.handleCounter("+")}
            >
              Increase
            </button>
          </div>
          <div className="action_section">
            <form>
              <input
                type="number"
                id="value_dec"
                placeholder="0"
                value={decValue}
                data-testid="value_dec"
                onChange={(event) => this.handleOperation(event)}
              ></input>
            </form>
            <button
              className="button button_dec"
              onClick={() => this.handleCounter("-")}
              data-testid="button_dec"
            >
              Decrease
            </button>
          </div>
        </div>
        {logs.length >= 1 && (
          <div className="logs" data-testid="logs-section">
            <button
              data-testid="toggle-logs"
              className="button button_info"
              onClick={() => this.setState({ showLogs: !showLogs })}
              style={{
                backgroundColor: showLogs ? "black" : "#e7e7e7",
                color: showLogs ? "#e7e7e7" : "black",
              }}
            >
              {showLogs && logs.length >= 1 ? "Hide" : "Show"} Logs
            </button>
            {showLogs && (
              <div className="logs_container">
                <div className="warning_container">
                  <p className="warning">click to delete</p>
                </div>
                <Logs
                  logsData={logs}
                  deleteLogs={(id) => this.deleteLogs(id)}
                />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Counter;
