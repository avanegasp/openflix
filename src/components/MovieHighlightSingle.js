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
  constructor(props){
    super(props)
    this.state = {
      title:"",
      releaseDate:"",
      overview:"",
      backdropImage:""
    }
  }
  componentDidMount(){ 
    this.props.consoleMovieInfo(this.props.movie.id)
    .then(res => {
        let movieTitle = res.movie_results[0].title;   
        let movieOverView = res.movie_results[0].overview;
        let movieReleaseDate = res.movie_results[0].release_date;
        let movieBackdrop = res.movie_results[0].backdrop_path;
        this.setState({
            title:movieTitle,
            overview: movieOverView,
            releaseDate: movieReleaseDate,
            backdropImage: movieBackdrop
        })
    })
  }
  render() {
    var style = {
      background:{
        backgroundImage:`url(http://image.tmdb.org/t/p/w1280/${this.state.backdropImage})`
      }
    }
    return (
      <div style={style.background}>     
        <div style={styles.MovieHighlightInfo}>
          <h4 style={styles.movieTitle}>{this.state.title}</h4>
          <span style={styles.watchNow}>watch now</span>
          <p>{this.state.overview}</p>
          {/*<Button>Play</Button>*/}
          {/*<Button>+ My list</Button> */}     
        </div>
      </div>
    )            
  }
}
/*
class MovieHighlightInfo  extends Component {
  render() {
    return (
      <div style={styles.MovieHighlightInfo}>
        <h4 style={styles.movieTitle}>{this.props.id}</h4>
        <span style={styles.watchNow}>watch now</span>
        <p>{this.props.video} {this.props.title}</p>
      </div>
    )
  }
}
*/

export default MovieHighlightSingle;