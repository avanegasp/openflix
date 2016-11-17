import React, { Component } from 'react';
import MovieHightlights  from './MovieHightlights.js';
import MovieCarousel from './MovieCarousel.js';
//import MovieInfoTabs from './MovieInfoTabs.js';
import '../App.css';

const styles = {
  footer: {
    background: '#FF931E',
    color: 'white',
    width: '100%',
    height: '8px'
  }
}

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <MovieHightlights {...this.props} />      
        <MovieCarousel {...this.props} />
        <footer style={styles.footer}>
        	OpenFlix 2016
        </footer>     
      </div>
    );
  }
}


export default Home;