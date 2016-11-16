import React, { Component } from 'react';
import logo1 from '../img/logo1.png';
import user from '../img/user.png';
import '../App.css';
import Dropdown from 'react-dropdown'
import '../css/dropdown.css';


const options = [
          'Usuario', 'Mi lista', 'Cerrar sesión'
]
const defaultOption = options[0]

class Nav extends Component {

  render() {
    return (
      <nav className="navbar">
        <span>
        	<img src={logo1} className="App-logo" alt="logo"/>
        </span>
        <UserNav/>
      </nav>
      
    );
  }
}


class UserNav extends Component {
	_onSelect(){
		console.log('hola')
	}
	render() {
		return (
			<span className="userNav">	
				<img src={user} alt="img user"/>    			
				<Dropdown className="userDrop" options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />				
      </span>
			)
	}
}



export default Nav;