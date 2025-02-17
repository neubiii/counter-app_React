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
    const { counter, incValue, decValue, logs } = this.state; //Destructuring
    let oldValue = counter;
    let newValue = null;

    if (sign === "+") {
      newValue = counter + incValue;
      this.setState({ counter: newValue, incValue: 0 });
    }
    if (sign === "-" && counter > decValue) {
      newValue = counter - decValue;
      this.setState({ counter: newValue, decValue: 0 });
    }
    if (sign === "") this.setState({ counter: 0 });

    if (incValue > 0 || decValue > 0) {
      //Generate a Log
      let newLog = `Previous Value = ${oldValue}, Value ${
        sign === "+" ? "Added" : "Subtracted"
      } = ${sign === "+" ? incValue : decValue}, New Value = ${newValue}`;
      console.log(newLog);
      this.setState({ logs: [...logs, newLog] });
    }
  }

  handleOperation(event) {
    // console.log(event.target.value);
    if (event.target.id === "value_inc") {
      //update the state of incValue
      this.setState({ incValue: Number(event.target.value) }); //+(event.target.value) is also correct
    } else {
      //update the state of decValue
      this.setState({ decValue: Number(event.target.value) });
    }
  }

  // handleOptionChange = (event) => {
  //     this.setState({ option: event.target.value });
  // };

  // handleNumberChange = (event) => {
  //     this.setState({ number: Number(event.target.value) });
  // };

  // buttonAction = () => {
  //     const { counter, option, number } = this.state;

  //     if (!number) {
  //         alert("Please enter a number!");
  //         return;
  //     }

  //     if (option === "add") {
  //         this.setState({counter: counter + number});
  //     } else if (option === "subtract") {
  //         if (counter < number) {
  //             this.setState({counter: 0});
  //         }
  //         else
  //             this.setState({counter: counter - number});
  //     }
  // };

  render() {
    const { counter, incValue, decValue, logs, showLogs } = this.state;
    return (
      <div className="main">
        <div>
          <h1>Counter Component</h1>
        </div>
        <div>
          <h3>Value of Counter : {counter}</h3>
        </div>
        <div className="buttons">
          <div className="action_section">
            <form>
              <input
                type="number"
                id="value_inc"
                placeholder="0"
                value={incValue}
                onChange={(event) => this.handleOperation(event)}
              />
            </form>
            <button
              className="button button_inc"
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
                onChange={(event) => this.handleOperation(event)}
              />
            </form>
            <button
              className="button button_dec"
              onClick={() => this.handleCounter("-")}
            >
              Decrease
            </button>
          </div>

          {/* <div className="action_section">
                        <button className="button button_dec"onClick={() => this.handleCounter()}>Reset</button>
                    </div> */}
          {/* <div className="action_section">
                        <input type= "number" className="input" value={this.state.number} onChange={this.handleNumberChange}/>
                        <select name="option" id="option" value={this.state.option} onChange={this.handleOptionChange}>
                            <option value="add">Add</option>
                            <option value="subtract">Subtract</option>
                        </select>
                        <button className="button button_inc" onClick = {this.buttonAction}>
                            {this.state.option === "add" ? "add" : "subtract"} {this.state.number}</button>
                    </div> */}
        </div>
        {/*  conditional rendering*/}
        {logs.length >= 1 && (
          <div className="logs">
            <button
              className="button button_info"
              onClick={() => this.setState({ showLogs: !showLogs })}
              style = {{backgroundColor: showLogs ? "yellow" : "blue", color: showLogs ? "black" : "white"}}
            >
              {showLogs && logs.length >= 1 ? "Hide" : "Show"} Logs
            </button>
            {showLogs && (
              <div className="logs_container">
                <Logs />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default Counter;
