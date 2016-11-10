import React, { Component } from 'react';
import MovieHighlightSingle from './MovieHighlightSingle.js';
import MovieHighlightInfo from './MovieHighlightInfo.js';
import Slider from 'react-slick';

const styles = {
  MovieHightlights: {
    width: 800,
    height: 500,
    margin: "0 auto",    
    boxShadow: "3px 3px 1px #888888"
  }
}

class MovieHightlights extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
  }
    return (
      <Slider {...settings}>
        <div>
        	<MovieHighlightSingle> 
    			Hola
    		</MovieHighlightSingle>
    	</div>
        <div>
        	<MovieHighlightSingle> 
    			amiguitos
    		</MovieHighlightSingle>
    	</div>
        <div>
        	<MovieHighlightSingle>
        		locos
    		</MovieHighlightSingle>
    	</div>
      </Slider>
    );            
  }
}


export default MovieHightlights;