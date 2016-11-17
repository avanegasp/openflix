import React, { Component } from 'react';
import Rebase from 're-base';
import './App.css';
import Nav from './components/Nav';
import Button from './components/Button';
import Display from './components/Display'
/*import Main from './components/Main.js';*/

var base = Rebase.createClass({
    apiKey: "AIzaSyCVHJ-fVIeo1ObZCkdYFy3348BCdmkg-eg",
    authDomain: "openflix-1c61f.firebaseapp.com",
    databaseURL: "https://openflix-1c61f.firebaseio.com",
    storageBucket: "openflix-1c61f.appspot.com",
    messagingSenderId: "12316202570"
}, 'App');

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      movies: [],
      loading: true,
      authenticated: false,
      user: {
        displayName: "User",
        photoURL: "https://files.slack.com/files-tmb/T03KUKHBV-F33UAVDSN-e836c261e4/default-user_360.png"
      }
    }
  }
  componentDidMount(){ 	 
    this.ref = base.syncState('movies', {
      context: this,
      state: 'movies',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    });
  }
  authHandler(error, user) {
	  if(error) console.log(error);
	  this.setState({
	  	authenticated:true,
	  	user:user.user
	  })
    this.context.router.push("/home")
	}
  login(){
  	base.authWithOAuthPopup('google', this.authHandler.bind(this));   
  }
  logout(){
  	base.unauth();
  	this.setState({
	  	authenticated:false,
	  	user: {
        displayName: "User",
        photoURL: "https://files.slack.com/files-tmb/T03KUKHBV-F33UAVDSN-e836c261e4/default-user_360.png"
      }
	  })
    this.context.router.push("/")
  }
  render() {
    return (
      <div className="App">
        <Nav name={this.state.user.displayName} imgUrl={this.state.user.photoURL} logout={this.logout.bind(this)} /> 
        {this.props.children && React.cloneElement(this.props.children, {
          movies: this.state.movies, login: this.login.bind(this), logout:this.logout.bind(this)
        })} 
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}


export default App;
