import React from "react";

class Header extends React.Component {
  render() {
    console.log(this.props.randomNumber);
    return (
      <div className="header_section">
        <h1>SUMBER</h1>
        <button onClick={() => this.props.generateNumber()}>
          Random Number
        </button>
        <p className="random_number">{this.props.randomNumber}</p>
      </div>
    );
  }
}

export default Header;
