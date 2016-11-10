import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';
import MovieHightlights  from './components/MovieHightlights.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <MovieHightlights />        
      </div>
    );
  }
}


export default App;
