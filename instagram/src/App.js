import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import dummyData from './dummy-data';
import SearchBar from './components/SearchBar';

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
        <div className="App-header">
          <SearchBar />
        </div>
        <div className="posts-container">
        <PostsContainer />
        </div>
      </div>
    );
  }
}

export default App;
