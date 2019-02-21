import React, { Component } from 'react';
import './App.css';


import dummyData from './dummy-data';
import SearchBar from './components/SearchBar/SearchBar';
import PostsContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    console.log('Constructor running');
    super();
    this.state = {
      dummyDataArray: [],
      searchedPosts: []
    };
  }

  componentDidMount() {
    //console.log('CDM running...');
    this.setState({ dummyDataArray: dummyData})
    {/*DAY 2 STEP 1^^^*/}
  }

  componentDidUpdate(prevProps, prevStates) {
    console.log('CDU running...')

  }

  filterPosts = e => {
    const filteredPosts = this.state.dummyDataArray.filter(post => {
      if (post.username.includes(e.target.value)) {
        return post;
      }
    });
    this.setState({ searchedPosts: filteredPosts });
  }

  render() {
    //console.log('Rendering App.js')
    return (
      <div className="App">
      <div className="search-bar">
        <SearchBar 
        searchTerm={this.state.searchTerm}
        searchPosts={this.filterPosts} />
      </div>
      <PostsContainer posts={
        this.state.searchedPosts.length > 0
        ? this.state.searchedPosts
        : this.state.dummyDataArray} />
      </div>
    );
  }
}

export default App;
