import React, { Component } from 'react';

class Display extends Component {
 render () {
   return this.props.if ? <div>{this.props.children}</div> : <div onClick={this.login.bind(this)}>Ingresar</div>
 }
}

export default Display;