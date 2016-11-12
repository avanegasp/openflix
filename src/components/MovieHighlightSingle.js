import React, { Component } from 'react';

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
  },
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

class MovieHighlightSingle  extends Component {
  render() {
    return (
    	<div style={styles.MovieHighlightSingle}>    	
    		<MovieHighlightInfo id={this.props.movie.id} video={this.props.movie.video}/>
    	</div>
    )            
  }
}

class MovieHighlightInfo  extends Component {
  render() {
    return (
    	<div style={styles.MovieHighlightInfo}>
    		<h4 style={styles.movieTitle}>{this.props.id}</h4>
    		<span style={styles.watchNow}>watch now</span>
    		<p>{this.props.video}</p>
    		{/*<Button>Play</Button>*/}
    		{/*<Button>+ My list</Button> */}  		
    	</div>
    )            
  }
}


export default MovieHighlightSingle;