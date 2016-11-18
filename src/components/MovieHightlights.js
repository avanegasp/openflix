import React, { Component } from 'react';
import MovieHighlightSingle from './MovieHighlightSingle.js';
import Slider from 'react-slick';
import '../App.css';
import { getMovieInfo } from '../utils/getMovieInfo'

class MovieHightlights extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    var moviesToMap = this.props.movies
    var highlights = moviesToMap.slice(0,5);
    return (
        moviesToMap.length > 0 ? 
          <Slider {...settings}>
            {highlights.map((movie, index) => (
              <div data-index={index} key={movie.id}>
                <MovieHighlightSingle consoleMovieInfo={getMovieInfo.bind(this)} movie={movie}/>
              </div>
            ))}
          </Slider> : null 
    );            
  }
}

export default MovieHightlights;