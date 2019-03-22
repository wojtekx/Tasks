import React, { Component } from 'react';
import './App.css';
import Result from "./components/Result"

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Tasks list</h1>
        <Result />
      </div>
    );
  }
}

export default App;
