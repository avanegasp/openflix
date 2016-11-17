import React, { Component } from 'react';

import Button from './Button.js';
import logoaf from '../img/logoaf.png';

class Main extends Component {
  
  onClickHandler() {
    console.log("hola")
    this.context.router.push("/home")
  }
  render() {
    return (
    	<div className="buttonIngresa">
    		<img src={logoaf} className="logo" alt="logo"/> 
            <button onClick={this.onClickHandler.bind(this)}>Ingresa</button> 
    		<Button onClick={this.onClickHandler.bind(this)}>Ingresa</Button>
    	</div>
    )            
  }
}

Main.contextTypes = {
    router: React.PropTypes.object
  }

export default Main