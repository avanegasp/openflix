import React, { Component } from 'react';
import MovieHightlights  from './MovieHightlights.js';
import MovieCarousel from './MovieCarousel.js';
import MovieInfoTabs from './MovieInfoTabs.js';

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <MovieHightlights />      
        <MovieCarousel />
        <MovieInfoTabs/>     
      </div>
    );
  }
}


export default Home;