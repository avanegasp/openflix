import React, { Component } from 'react';
import Slider from 'react-slick'


class MovieCarousel extends Component {
  render () {
      var settings = {
        dots: true,
        slidesToShow: 3           
      }
      return (
        <div className='carouselContainer'>
          <Slider {...settings}>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
            <div><img src='http://placekitten.com/g/400/200' /></div>
          </Slider>
        </div>
    )
  }
}

export default MovieCarousel;