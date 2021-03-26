import "./App.css";
import React from "react";
import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Incrementers from "./Components/Incrementers";
import Refresh from "./Components/Refresh";

class App extends React.Component {
  state = {
    buttons: {
      "addOne": {
        disabled: false,
        number: 1
      },
      "addFive": {
        disabled: false,
        number: 5
      },
      "addTen": {
        disabled: false,
        number: 10
      }
    },
    randomNumber: null,
    incrementNumber: 0,
    message: '',
  };

  generateNumber = () => {
    this.setState((currState) => {
      const newState = { ...currState };
      newState.randomNumber = Math.floor(Math.random() * 100 + 1);
      return newState;
    });
  };

  incrementByN = (num) => {
    if (this.state.randomNumber === null) {
      return this.state.incrementNumber;
    }
    this.setState((currState) => {
      const newState = { ...currState };
      newState.incrementNumber += num;

      if (newState.incrementNumber === currState.randomNumber) {
        newState.message = 'Congratulations, number matched!'

      } else if (newState.incrementNumber > currState.randomNumber) {
        newState.message = 'Tut tut, try again! Hit refresh'
      }
      return newState;
    });

  };

  clearCounter = () => {
    this.setState((currState) => {

      const newState = { ...currState };
      newState.incrementNumber = 0;
      newState.message = ''

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
          message={this.state.message}
        />
        <Incrementers
          incrementByN={this.incrementByN}
          incrementNumber={this.state.incrementNumber}
          buttons={this.state.buttons}

        />
        <Refresh clearCounter={this.clearCounter} />
      </div>
    );
  }
}

export default App;
