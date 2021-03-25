import React, { Component } from "react";

class Counter extends Component {
  randomNumber = this.props.randomNumber
  render() {
    return <div>
      <p className="increment_main">{this.props.incrementNumber}</p>
    </div>;
  }
}

export default Counter;
