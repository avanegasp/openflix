import React, { Component } from 'react';
import Slider from 'react-slick'
import MovieInfoTabs from './MovieInfoTabs'
import { getMovieInfo } from '../utils/getMovieInfo'


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
        slidesToShow: 5
      }
      var moviesToMap = this.props.movies       
      return (
        <div className='carouselContainer'>

          {
            moviesToMap.length > 0 ? 
              <Slider {...settings}>
                {moviesToMap.map((movie, index) => (
                  <div onClick={this.onClick.bind(this)} data-index={index} key={index}>
                    <MovieCard getMovieInfo={getMovieInfo} movie={movie}/>
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
    return (
      <div><img src={`http://image.tmdb.org/t/p/w300/${this.state.image}`} alt={this.state.alt}/></div>
    )
  }
}

class TabsCont extends Component {
  render(){
    return(
      <div>
        <MovieInfoTabs/>
      </div>
    )
  }
}

export default MovieCarousel;