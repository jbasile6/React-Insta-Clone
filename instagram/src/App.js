import React, { Component } from 'react';
import './App.css';


import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsContainer from './components/PostContainer/PostContainer';

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
      <div className="search-bar">
        <SearchBar />
      </div>
      <PostsContainer posts={this.state.dummyDataArray} />
      </div>
    );
  }
}

export default App;
