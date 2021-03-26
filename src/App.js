import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Incrementers from "./Components/Incrementers";
import Refresh from "./Components/Refresh";

class App extends React.Component {
  state = {
    randomNumber: null,
    incrementNumber: 0,
  };

  generateNumber = () => {
    this.setState((currState) => {
      const newState = { ...currState };
      newState.randomNumber = Math.floor(Math.random() * 100 + 1);

      return newState;
    });
  };

  incByOne = (event) => {
    console.log(event);
    if (this.state.randomNumber === null) {
      return this.state.incrementNumber;
    }

    this.setState((currState) => {
      const newState = { ...currState };
      newState.incrementNumber++;
      if (newState.incrementNumber === currState.randomNumber) {
        console.log("cheese");
      } else if (newState.incrementNumber > currState.randomNumber) {
        newState.incrementNumber = currState.incrementNumber;
      }
      return newState;
    });
  };

  incByFive = (event) => {
    if (this.state.randomNumber === null) {
      return this.state.incrementNumber;
    }
    this.setState((currState) => {
      const newState = { ...currState };
      newState.incrementNumber = newState.incrementNumber + 5;
      if (newState.incrementNumber === currState.randomNumber) {
        console.log("cheese");
      } else if (newState.incrementNumber > currState.randomNumber) {
        console.log(newState.incrementNumber);
      }
      return newState;
    });
  };

  incByTen = () => {
    if (this.state.randomNumber === null) {
      return this.state.incrementNumber;
    }
    this.setState((currState) => {
      const newState = { ...currState };
      newState.incrementNumber = newState.incrementNumber + 10;
      if (newState.incrementNumber === currState.randomNumber) {
        console.log("cheese");
      } else if (newState.incrementNumber > currState.randomNumber) {
      }
      return newState;
    });
  };

  clearCounter = () => {
    this.setState((currState) => {
      const newState = { ...currState };
      newState.incrementNumber = 0;
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
        <Counter
          randomNumber={this.state.randomNumber}
          incrementNumber={this.state.incrementNumber}
        />
        <Incrementers
          incByOne={this.incByOne}
          incByFive={this.incByFive}
          incByTen={this.incByTen}
          incrementNumber={this.state.incrementNumber}
        />
        <Refresh clearCounter={this.clearCounter} />
      </div>
    );
  }
}

export default App;
