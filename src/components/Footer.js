import React, { Component } from 'react';

const styles = {
  footer: {
    background: '#FF931E',
    color: 'white',
    width: '100%',
    height: '8px',
  }
}

class Footer extends Component {
	
  render() {
    return (
         	<footer style={styles.footer}>
        	    OpenFlix 2016
            </footer>
     );
  }
}

export default Footer;