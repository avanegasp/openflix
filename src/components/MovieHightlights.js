import React, { Component } from 'react';
import MovieHighlightSingle from './MovieHighlightSingle.js';
import Slider from 'react-slick';
import '../App.css';
import { getMovieInfo } from '../utils/getMovieInfo'

/*const styles = {
  MovieHightlights: {    
    boxShadow: "3px 3px 1px #888888"
  }

}*/

class MovieHightlights extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true
    }
    var moviesToMap = this.props.movies
    console.log(moviesToMap)
    return (
        moviesToMap.length > 0 ? 
          <Slider {...settings}>
            {moviesToMap.map((movie, index) => (
              <div data-index={index} key={movie.id}>
                <MovieHighlightSingle consoleMovieInfo={getMovieInfo.bind(this)} movie={movie}/>
              </div>
            ))}
          </Slider> : null 
    );            
  }
}

export default MovieHightlights;