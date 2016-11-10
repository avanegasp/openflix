import React, { Component } from 'react';
/*import Button  from './components/Button.js';*/

const styles = {
  MovieHighlightInfo: {
    width: 250,
    height: 250,    
    marginLeft: 30,
    fontFamily: 'Roboto, sans-serif'   
    
  },
  movieTitle: {
  	marginBottom: 2
  },
  watchNow: {
  	color: '#BDBDBD',
  	fontSize: 14,  	
  }

}


class MovieHighlightInfo  extends Component {
  render() {
    return (
    	<div style={styles.MovieHighlightInfo}>
    		<h4 style={styles.movieTitle}>KUNG FURY</h4>
    		<span style={styles.watchNow}>watch now</span>
    		<p> In 1985, Kung Fury, the toughest martial artist cop in Miami, goes back in time to kill the worst criminal of all time - kung fuhrer Hitler.</p>
    		{/*<Button>Play</Button>*/}
    		{/*<Button>+ My list</Button> */}  		
    	</div>
    )            
  }
}

export default MovieHighlightInfo;