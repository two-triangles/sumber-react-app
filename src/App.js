import "./App.css";
import React from "react";
import Header from "./Components/Header";

class App extends React.Component {
  state = {
    randomNumber: null,
  };

  generateNumber = () => {
    this.setState((currState) => {
      const newState = { ...currState };
      newState.randomNumber = Math.floor(Math.random() * 100 + 1);

      return newState;
    });
  };

  render() {
    return (
      <div className="App">
        <Header
          randomNumber={this.state.randomNumber}
          generateNumber={this.generateNumber}
        />
      </div>
    );
  }
}

export default App;
