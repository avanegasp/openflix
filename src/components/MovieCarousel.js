import React, { Component } from 'react';
import Slider from 'react-slick'
import MovieInfoTabs from './MovieInfoTabs'

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
  constructor(){
    super()
    this.state = {
      hover:false
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
  render(){
  var inner = styles.normal;
  if(this.state.hover) {
    inner = styles.hover;
  }
    return (
      <div><img src='http://placekitten.com/g/300/150' alt="cat"/></div>
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