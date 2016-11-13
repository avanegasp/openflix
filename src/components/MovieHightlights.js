import React, { Component } from 'react';
import MovieHighlightSingle from './MovieHighlightSingle.js';
import MovieHighlightInfo from './MovieHighlightInfo.js';
import Slider from 'react-slick';

const styles = {
  MovieHightlights: {
    width: 800,
    height: 500,
    margin: "0 auto",    
    boxShadow: "3px 3px 1px #888888"
  }
}


class MovieHightlights extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    } 
    const moviesInfo = [
      {
        name: 'KUNG FURY',
        description: 'In 1985, Kung Fury, the toughest martial artist cop in Miami, goes back in time to kill the worst criminal of all time - kung fuhrer Hitler.'
      },
        {
        name: 'MACHETE KILLS',
        description: 'The U.S. government recruits Machete to battle his way through Mexico in order to take down an arms dealer who looks to launch a weapon into space..'
      },
          {
        name: 'EVIL DEAD',
        description: 'Five friends travel to a cabin in the woods, where they unknowingly release flesh-possessing demons'
      },      {
        name: 'BRAIN DEAD',
        description: 'In a showdown of man vs. machine, Martin plunges into a chaotic nightmare trying to save his mind from the megalomaniacal corporation.'
      }

    ]
    return (
      <Slider {...settings}>
        {moviesInfo.map((movie) => <div><MovieHighlightSingle movie={movie}/></div>)}
      </Slider>
    );            
  }
}


export default MovieHightlights;