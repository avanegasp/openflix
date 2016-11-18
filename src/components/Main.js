import React, { Component } from 'react';
import Button from './Button.js';
import logoaf from '../img/logoaf.png';

class Main extends Component {
  
  onClickHandler() {
    this.props.login()
  }
  render() {
    return (
    	<div className="loginMain">
    		<img src={logoaf} className="logo" alt="logo"/> 
            <button onClick={this.onClickHandler.bind(this)}>Ingresa</button>
            <p className="textMain">En OpenFLix puedes ver peliculas desde la comodidad de tu computador</p> 
    	</div>
    )            
  }
}


Main.contextTypes = {
    router: React.PropTypes.object
}


export default Main