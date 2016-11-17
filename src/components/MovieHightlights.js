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
      slidesToScroll: 1
    }
    var moviesToMap = this.props.movies
    return (
      <Slider {...settings}>
      <h1>{this.props.movieTitle}</h1>
       {moviesToMap.map((movie) => <div><MovieHighlightSingle consoleMovieInfo={getMovieInfo.bind(this)} movie={movie}/></div>)}
     </Slider>
    );            
  }
}

export default MovieHightlights;