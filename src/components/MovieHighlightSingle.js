import React, { Component } from 'react';
import movie from '../img/kungfury.jpg';
/*import MovieHighlightInfo from './components/MovieHighlightInfo.js';*/

const styles = {
  MovieHighlightSingle: {
    width: 800,
    height: 500,
    margin: "0 auto",   
    display: 'flex' 
  },
  moviePoster: {
  	width: 800,
    alignItems:  'flex-start'   
  }
}


class MovieHighlightSingle  extends Component {
  render() {
    return (
    	<div style={styles.MovieHighlightSingle}>
    	
    		{this.props.children}
    	</div>
    )            
  }
}


export default MovieHighlightSingle;