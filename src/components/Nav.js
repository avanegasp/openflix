
import React, { Component } from 'react';
import logo from '../logo.svg';
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
     <div className ="nav">
       <h3>OpenFlix</h3>	
       <img src={logo} className="App-logo" alt="logo" />
       <UserNav />
     </div>
   );
 }
}


class UserNav extends Component {
    _onSelect(){
        console.log('hola')
    }
    render() {
        return (
            <div>    
                <img src={user} alt="img user"/>            
                <Dropdown options={options} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />                
            </div>
            )
    }
}



	export default Nav;