import React, { Component } from 'react';
import './App.css';
import CounterContainer from './Components/CounterContainer/counterContainer'
import counterReducer from './Components/CounterContainer/counterReducer'

class App extends Component {
  render() {
    return (
      <div>
      <CounterContainer/>
      </div>
    );
  }
}

export default App;
