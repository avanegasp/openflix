import React, { Component } from 'react';
import logo1 from '../img/logo1.png';
import user from '../img/user.png';
import logoaf from '../img/logoaf.png';
import '../App.css';
import Dropdown from 'react-dropdown'
import '../css/dropdown.css';



class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <span>
        	<img src={logo1} className="App-logo" alt="logo"/>  
        </span>
        <UserNav {...this.props}/>
      </nav>
      
    );
  }
}

class UserNav extends Component {
	_onSelect(tabSelected){
		console.log('hola',tabSelected)
    if (tabSelected.value === "Cerrar sesión") {
      this.props.logout()
    }
	}
	render() {
    const options = [
      this.props.name, 'Mi lista', 'Cerrar sesión'
    ]
		return (
			<span className="userNav">	
				<img src={this.props.imgUrl} alt="img user"/>    			
				<Dropdown options={options} onChange={this._onSelect.bind(this)} value={this.props.name} placeholder="Select an option"/>				
      </span>
    )
	}
}

UserNav.contextTypes = {
  router: React.PropTypes.object
}



export default Nav;