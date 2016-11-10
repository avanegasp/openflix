import React, { Component } from 'react';
import MovieHightlights  from './MovieHightlights.js';
import MovieCarousel from './MovieCarousel.js'

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <MovieHightlights />      
         <MovieCarousel />     
      </div>
    );
  }
}


export default Home;