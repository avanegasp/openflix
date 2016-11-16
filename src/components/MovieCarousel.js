import React, { Component } from 'react';
import Slider from 'react-slick'
//import MovieInfoTabs from './MovieInfoTabs'
import { getMovieInfo } from '../utils/getMovieInfo'

const styles = {
 outer: {
    height: '100px',
    width: '300px',
    margin: '100px',    
    cursor: 'pointer',
    position: 'relative'
},

normal: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 0
},

hover: {
    height: '120%',
    width: '120%',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 1,
    transition: 'opacity 400ms ease'
   }
}

class MovieCarousel extends Component {
  constructor(){
    super()
    this.state = {
        childVisible: false
    }
  }
  render () {
      var settings = {
        arrows: true,
        dots:true,
        slidesToShow: 3
      }
      var moviesToMap = this.props.movies       

      return (
        <div className='carouselContainer'>
          {
            moviesToMap.length > 0 ? 
              <Slider {...settings}>
                {moviesToMap.map((movie, index) => (
                  <div data-index={index} key={index}>
                    <MovieCard onClick={this.onClick} getMovieInfo={getMovieInfo} movie={movie}/>
                  </div>
                ))}
              </Slider> : null 
          }
          {
            this.state.childVisible
              ? <TabsCont />
              : null
          }
        </div>
      )
  }
  onClick() {
    this.setState({childVisible: true});
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
  render(){
  var inner = styles.normal;
  if(this.state.hover) {
    inner = styles.hover;
  }
    return (

      <div><img src={`http://image.tmdb.org/t/p/w300/${this.state.image}`} alt={this.state.alt}/></div>

    )
  }
}

class TabsCont extends Component {
  render(){
    return(
      <div>
        Hola
      </div>
    )
  }
}

export default MovieCarousel;