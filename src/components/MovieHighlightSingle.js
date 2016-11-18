import React, { Component } from 'react';
import '../App.css';

const styles = {
  /*MovieHighlightSingle: {
    width: 800,
    height: 500,
    margin: "0 auto",   
    display: 'flex' 
  },*/
  MovieHighlightInfo: {
    width: 300,    
    marginLeft: 30,
    fontSize:'16pt',
    color: '#FFFFFF',
    padding: '10px'
  },
  movieTitle: {
    marginBottom: 2
  },
  gradient:{
    background:'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 36%, rgba(0,0,0,0.5) 40%, rgba(255,255,255,0) 100%)',
    height:'600px',
    padding:'100px 50px'
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
        height:'600px'
      }
    }
    return (
      <div style={style.background}>
        <div style={styles.gradient}>
          <div style={styles.MovieHighlightInfo}>
            <h4 style={styles.movieTitle}>{this.state.title}</h4>
            <p className="movieOverview">{this.state.overview}</p>
            <button onClick={this.playMovie.bind(this, this.props.movie.id)}>Watch Now</button>     
          </div>
        </div>
      </div>
    )            
  }
}

MovieHighlightSingle.contextTypes={
  router:React.PropTypes.object
} 

export default MovieHighlightSingle;