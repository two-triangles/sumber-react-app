import React, { Component } from "react";

class Incrementers extends Component {
  render() {
    const { buttons } = this.props
    const buttonsArray = Object.entries(buttons)

    return (
      <div>
        <ul>
          {buttonsArray.map(([incValue, { isDisabled, number }]) => {
            return <button disabled={isDisabled} onClick={() => this.props.incrementByN(number)} key={incValue}>{incValue}</button>
          })}
        </ul>

      </div>
    );
  }
}

export default Incrementers;
