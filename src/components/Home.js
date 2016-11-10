import React, { Component } from 'react';
import MovieHightlights  from './MovieHightlights.js';
import MovieCarousel from './MovieCarousel.js';
import MovieInfoTabs from './MovieInfoTabs.js';
import '../App.css';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <MovieHightlights />      
        <MovieCarousel />
        <MovieInfoTabs/>
        <footer>
        	OpenFlix 2016
        </footer>     
      </div>
    );
  }
}


export default Home;