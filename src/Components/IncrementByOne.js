import React, { Component } from "react";

class IncrementByOne extends Component {
  render() {
    return (
      <div>
        <button className="increment_1 inc_button" onClick={() => this.props.incByOne()}>Add 1</button>

        <button className="increment_5 inc_button" onClick={() => this.props.incByFive()}>Add 5</button>

        <button className="increment_10 inc_button" onClick={() => this.props.incByTen()}>Add 10</button>
      </div>
    );
  }
}



export default IncrementByOne;
