import React, { Component } from 'react';
import Button from './Button.js';
import logoaf from '../img/logoaf.png';

class Main extends Component {
  render() {
    return (
    	<div className="buttonIngresa">
    		<img src={logoaf} className="App-logo" alt="logo"/>  
    		<Button>Ingresa</Button>
    	</div>
    )            
  }
}

export default Main;