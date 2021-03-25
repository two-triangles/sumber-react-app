import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Counter from './Components/Counter'
import IncrementByOne from "./Components/IncrementByOne";

class App extends React.Component {
  state = {
    randomNumber: null,
    incrementNumber: 0
  };

  generateNumber = () => {
    this.setState((currState) => {
      const newState = { ...currState };
      newState.randomNumber = Math.floor(Math.random() * 100 + 1);

      return newState;
    });
  };

  incByOne = () => {
    this.setState((currState) => {
      const newState = { ...currState }
      newState.incrementNumber++
      return newState
    })
  }

  incByFive = () => {
    this.setState((currState) => {
      const newState = { ...currState }
      newState.incrementNumber = newState.incrementNumber + 5
      return newState
    })
  }

  incByTen = () => {
    this.setState((currState) => {
      const newState = { ...currState }
      newState.incrementNumber = newState.incrementNumber + 10
      return newState
    })
  }

  render() {
    return (
      <div className="App">
        <Header
          randomNumber={this.state.randomNumber}
          generateNumber={this.generateNumber}
        />
        <Counter randomNumber={this.state.randomNumber} incrementNumber={this.state.incrementNumber} />
        <IncrementByOne incByOne={this.incByOne} incByFive={this.incByFive} incByTen={this.incByTen} incrementNumber={this.state.incrementNumber} />
      </div>
    );
  }
}

export default App;
