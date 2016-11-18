import React, { Component } from 'react';
import logo from '../logo.svg';


const styles = {
  footer: {
    background: '#FF931E',
    color: 'white',
    width: '100%',
    height: '8px',
  },
  img:{
    width:50,
    height:30,
  }
}

class Footer extends Component {
	
  render() {
    return (
         	<footer style={styles.footer}>
            <img src={logo} style={styles.img} className="logoReact" alt="logo"/> 
        	    OpenFlix 2016 
          </footer>
     );
  }
}

export default Footer;