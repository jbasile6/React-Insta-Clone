import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';

class App extends Component {
  constructor() {
    super();
    this.state = {
      dummyDataArray: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
