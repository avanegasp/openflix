import React, { Component } from 'react';
import Rebase from 're-base';
import './App.css';
import Nav from './components/Nav.js';
/*import Main from './components/Main.js';*/
import apiKey from './config/apikey.js';


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
      loading: true
    }
    this.title = "Hola Mundo!";
  }
  getMovieInfo(imdbId){
  	fetch(`https://api.themoviedb.org/3/find/${imdbId}?api_key=${apiKey}&language=en-US&external_source=imdb_id`)
    	.then(data => data.json())
    	.then(function(res){
    		console.log(res.movie_results[0].original_title);      
    })
  }
  componentDidMount(){ 	 
     this.getMovieInfo('tt0063350');
    this.ref = base.syncState('movies', {
      context: this,
      state: 'movies',
      asArray: true,
      then(){
        this.setState({loading: false})
      }
    });
  }
  render() {
  	//console.log("The state " + JSON.stringify(this.state.movies));
    return (
      <div className="App">
        <Nav />
        {this.props.children && React.cloneElement(this.props.children, {
              movieTitle: this.title
				})}
      </div>
    );
  }
}


export default App;
