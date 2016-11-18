import React, { Component } from 'react';

import Button from './Button.js';
import logoaf from '../img/logoaf.png';

class Main extends Component {
  
  onClickHandler() {
    console.log(this.props.login)
    this.props.login()
  }
  render() {
    return (
    	<div className="buttonIngresa">
    		<img src={logoaf} className="logo" alt="logo"/> 
            <button onClick={this.onClickHandler.bind(this)}>Ingresa</button> 
    	</div>
    )            
  }
}

Main.contextTypes = {
    router: React.PropTypes.object
}

export default Main