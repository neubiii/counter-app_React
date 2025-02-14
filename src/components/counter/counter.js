import React from "react";
import "./counter.css";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  handleCounter(sign) {
    if (sign === "+") {
      this.setState({ counter: this.state.counter + 1 });
    }
    if (sign === "-") {
      this.setState({ counter: this.state.counter - 1 });
    }
  }
  render() {
    const { counter } = this.state;
    return (
      <div className="main">
        <div>
          <h1>Counter Component</h1>
        </div>
        <div>
          <h3>Value of Counter: {counter}</h3>
        </div>
        <div className="buttons">
          <div className="actions_section">
            <button
              className="button button_inc"
              onClick={() => this.handleCounter("+")}
            >
              Increase
            </button>
          </div>
          <div className="actions_section">
            <button
              className="button button_dec"
              onClick={() => this.handleCounter("-")}
            >
              Decrease
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Counter;
