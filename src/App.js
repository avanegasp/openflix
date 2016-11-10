import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import MovieInfoNav from './components/MovieInfoNav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    );
  }
}


export default App;
