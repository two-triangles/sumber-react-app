import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div className="counter_num">
        <p className="increment_main">{this.props.incrementNumber}</p>
        <p id="winMessage">{this.props.message}</p>
      </div>
    );
  }
}

export default Counter;
