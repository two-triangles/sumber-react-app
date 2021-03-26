import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header_section">
        <div className="background_img"></div>
        <h1>SUMBER</h1>
        <div className="instructions">
          <ul>
            <li>Press the random number button!</li>
            <li>Use the incrementer buttons to increase the counter!</li>
            <li>Match your number!</li>
            <li>Hit refresh and start again!</li>
          </ul>
        </div>
        <button
          className="random_num_button"
          onClick={() => this.props.generateNumber()}
        >
          Random Number
        </button>
        <div className="random_num_container">
          <p className="random_number">{this.props.randomNumber}</p>
        </div>
      </div>
    );
  }
}

export default Header;
