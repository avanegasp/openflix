import React, { Component } from 'react';
import Slider from 'react-slick'


class MovieCarousel extends Component {
  render () {
      var settings = {
        dots: true,
        slidesToShow: 5           
      }
      return (
        <div className='carouselContainer'>
          <Slider {...settings}>
          
            <div><img src='http://pepecine.com/img/peliculas-comics.jpg' alt="cat"/></div>
            <div><img src='http://pepecine.com/img/peliculas-comics.jpg' alt="cat"/></div>
            <div><img src='http://pepecine.com/img/peliculas-comics.jpg' alt="cat"/></div>
            <div><img src='http://pepecine.com/img/peliculas-comics.jpg' alt="cat"/></div>
            
          </Slider>
        </div>
    )
  }
}

export default MovieCarousel;