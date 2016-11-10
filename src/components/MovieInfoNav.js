import React, { Component } from 'react';
//import Carousel from 'nuka-carousel';
import Slider from 'react-slick'

/*
class MovieCarousel extends Component {
  render() {
    return (
      <Carousel slidesToShow={5}>

        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/>
      </Carousel>
    )
  }
}*/

class MovieCarousel extends Component {
  render () {
  	  var settings = {
  	  	dots: true,
  	  	slidesToShow: 5
  	  }
  	  return (
  	  	<div className='container'>
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

/*
import Carousel from '../src/carousel';
import React from 'react';
import ReactDom from 'react-dom';

window.React = React;

const App = React.createClass({
  mixins: [Carousel.ControllerMixin],

  getInitialState() { return { slideIndex: 0 }; },

  render() {
    return (
      <div style={{width: '50%', margin: 'auto'}}>
        <Carousel
          ref="carousel"
          data={this.setCarouselData.bind(this, 'carousel')}
          slideIndex={this.state.slideIndex}
          afterSlide={newSlideIndex => this.setState({ slideIndex: newSlideIndex })}>
          <img src="http://placehold.it/1000x400&text=slide1"/>
          <img src="http://placehold.it/1000x400&text=slide2"/>
          <img src="http://placehold.it/1000x400&text=slide3"/>
          <img src="http://placehold.it/1000x400&text=slide4"/>
          <img src="http://placehold.it/1000x400&text=slide5"/>
          <img src="http://placehold.it/1000x400&text=slide6"/>
        </Carousel>
        <button onClick={() => this.setState({ slideIndex: 0 })}>1</button>
        <button onClick={() => this.setState({ slideIndex: 1 })}>2</button>
        <button onClick={() => this.setState({ slideIndex: 2 })}>3</button>
        <button onClick={() => this.setState({ slideIndex: 3 })}>4</button>
        <button onClick={() => this.setState({ slideIndex: 4 })}>5</button>
        <button onClick={() => this.setState({ slideIndex: 5 })}>6</button>
      </div>
    )
  }
});

//const content = document.getElementById('content');

//ReactDom.render(<App/>, content)

*/
export default MovieCarousel;