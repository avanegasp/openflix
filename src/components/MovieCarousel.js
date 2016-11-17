import React, { Component } from 'react';
import Slider from 'react-slick'
import MovieInfoTabs from './MovieInfoTabs'
import { getMovieInfo } from '../utils/getMovieInfo'

const styles = {
 outer: {
    height: '169px',
    width: '300px',
    width: '00px',
    margin: '20px',    
    cursor: 'pointer',
    margin: '5px',
    position: 'relative'
  },
  normal: {
    height: '169px',
    width: '300px',
    margin: '20px',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 10,
    right: 10   
  },
  hover: { 
    height: '229px',
    width: '360px',
    position: 'absolute',
    margin: '5px',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,    
    opacity: 1,
    transition: 'opacity 500ms linear',    
  }
}
class MovieCarousel extends Component {
  constructor(){
    super()
    this.state = {
        childVisible: false,
        currentMovieDetails: '',
        hover: false             
    }
  }

  onMouseEnterHandle(){
    this.setState({
      hover:true
    })
 } 

  onMouseLeaveHandler(){
   this.setState({
      hover:false
   })
  }
 
  render () {
      var settings = {
        arrows: true,
        dots:true,
        slidesToShow: 3
      }

      var moviesToMap = this.props.movies;

      return (
        <div className='carouselContainer'>
          {
            moviesToMap.length > 0 ? 
              <Slider {...settings}>
                {moviesToMap.map((movie, index) => (
                  <div onClick={this.onClick.bind(this, movie.id)} data-index={index} key={index}>
                    <MovieCard getMovieInfo={getMovieInfo} movie={movie}/>
                  </div>
                ))}
              </Slider> : null 
          }
          {
            this.state.childVisible
              ? <TabsCont thisMovie={this.state.currentMovieDetails}/>
              : null
          } 

        </div>
      )
  }
  onClick(movieId) {    
    this.setState({
      childVisible: true,
      currentMovieDetails: movieId
    });
  }
}

class MovieCard extends Component {
  constructor(props){
    super(props)
    this.state = {
      alt:"",
      image:"hey"  
    }
  }
  componentDidMount(){
    this.props.getMovieInfo(this.props.movie.id)
    .then(res => {
        let movieImagePath = res.movie_results[0].backdrop_path;
        let movieTitle =  res.movie_results[0].title
        this.setState({
            alt:movieTitle,
            image:movieImagePath
        }) 
    })
  }

  onMouseEnterHandle(){
    this.setState({
      hover:true
    })
  }

  onMouseLeaveHandler(){
    this.setState({
      hover:false
    })
  }

  render(){
  var inner = styles.normal;
    if(this.state.hover) {
      inner = styles.hover;
    }
    return (
      <div style={styles.outer}>
        <img src={`http://image.tmdb.org/t/p/w300/${this.state.image}`} alt={this.state.alt} onMouseEnter={this.onMouseEnterHandle.bind(this)} onMouseLeave={this.onMouseLeaveHandler.bind(this)} style={inner}/>
      </div>
    )
  }
}

class TabsCont extends Component {
  render(){    
    return(
      <div>
        <MovieInfoTabs {...this.props}/>
      </div>
    )
  }
}

export default MovieCarousel;