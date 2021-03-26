import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      <div>
        <p className="increment_main">{this.props.incrementNumber}</p>
      </div>
    );
  }
}

export default Counter;
