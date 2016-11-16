import React, { Component } from 'react';
import Slider from 'react-slick'
import MovieInfoTabs from './MovieInfoTabs'


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
      return (
        <div className='carouselContainer'>
          <Slider {...settings}>
            <div onClick={this.onClick.bind(this)}><MovieCard/></div>
            <div onClick={this.onClick.bind(this)}><MovieCard/></div>
            <div onClick={this.onClick.bind(this)}><MovieCard/></div>
            <div onClick={this.onClick.bind(this)}><MovieCard/></div>
            <div onClick={this.onClick.bind(this)}><MovieCard/></div>
          </Slider>
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
      <MovieInfoTabs/>
    )
  }
}

export default MovieCarousel;