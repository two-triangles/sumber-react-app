import React, { Component } from "react";

class Incrementers extends Component {
  render() {
    return (
      <div>
        <button
          className="increment_1 inc_button"
          onClick={(event) => {
            this.props.incByOne(event);
          }}
        >
          Add 1
        </button>

        <button
          className="increment_5 inc_button"
          onClick={(event) => {
            this.props.incByFive(event);
          }}
        >
          Add 5
        </button>

        <button
          className="increment_10 inc_button"
          onClick={(event) => {
            this.props.incByTen(event);
          }}
        >
          Add 10
        </button>
      </div>
    );
  }
}

export default Incrementers;
