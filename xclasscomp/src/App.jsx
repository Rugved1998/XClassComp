import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1>Counter App</h1>
        <p data-testid="countDisplay">Count: {count}</p>
        <button data-testid="incrementButton" onClick={this.handleIncrement}>
          Increment
        </button>
        <button data-testid="decrementButton" onClick={this.handleDecrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default App;