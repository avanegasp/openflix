import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav.js';
import Main from './components/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
      </div>
    );
  }
}

export default App;
