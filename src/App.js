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
      user: null
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
	}
  login(){
  	base.authWithOAuthPopup('google', this.authHandler.bind(this));
    this.context.router.push("/home")
  }
  logout(){
  	base.unauth();
  	this.setState({
	  	authenticated:false,
	  	user:null
	  })
  }
  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children && React.cloneElement(this.props.children, {
          movies: this.state.movies
        })}
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
}


export default App;
