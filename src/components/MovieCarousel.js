import React, { Component } from 'react';
import Slider from 'react-slick'
//import MovieInfoTabs from './MovieInfoTabs'


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
      console.log("props at carousel " + JSON.stringify(this.props.movies))        
      return (
        <div className='carouselContainer'>
          {
            moviesToMap.length > 0 ? 
              <Slider>
                {moviesToMap.map((movie, index) => (
                  <div data-index={index} key={index}>
                    <MovieCard {...this}/>
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
  render(){
    return (
      <div><img src='http://placekitten.com/g/300/100' alt="cat"/></div>
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