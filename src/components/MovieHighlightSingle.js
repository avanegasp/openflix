import React, { Component } from 'react';

const styles = {
  /*MovieHighlightSingle: {
    width: 800,
    height: 500,
    margin: "0 auto",   
    display: 'flex' 
  },*/
  moviePoster: {
    width: 800,    
    alignItems:  'flex-start'   
  },
    MovieHighlightInfo: {
    width: 250,
    height: 250,    
    marginLeft: 30,
    border:'solid 1px red',
    fontFamily: 'Roboto, sans-serif',
    color: '#FFFFFF',
    backgroundColor: 'rgba(24, 36, 44, 0.7)',
    padding: '10px',

  },
  movieTitle: {
    marginBottom: 2
  },
  watchNow: {
    color: '#FF931E',
    fontSize: 14,
    textDecoration: 'none'   
  }, 
  gradient:{
    background:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 36%, rgba(255,255,255,0.5) 40%, rgba(255,255,255,0) 100%)',
    height:'70vh'
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
  playMovie(movieId){
      this.context.router.push(`/moviePlayer/${movieId}`)
  }
  render() {
    var style = {
      background:{
        background:`url(http://image.tmdb.org/t/p/w1280/${this.state.backdropImage}) no-repeat right`,
        height:'70vh'
      }
    }
    return (
      <div style={style.background}>
        <div style={styles.gradient}>
          <div style={styles.MovieHighlightInfo}>
            <h4 style={styles.movieTitle}>{this.state.title}</h4>
            <span style={styles.watchNow}>watch now</span>
            <p>{this.state.overview}</p>
            <button onClick={this.playMovie.bind(this, this.props.movie.id)}>Play</button>
            {/*<Button>+ My list</Button> */}     
          </div>
        </div>
      </div>
    )            
  }
}

MovieHighlightSingle.contextTypes={
  router:React.PropTypes.object
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