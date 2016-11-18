import React, { Component } from 'react';
import MovieCarousel from './MovieCarousel.js';

class MovieSliders extends Component {
	render(){
		var movies = this.props.movies;
		var newest = movies.slice(0, 10);
		var classics = movies.slice(11, 22);
		var popular = movies.slice(23, 30);
		var recommended = movies.slice(31, movies.length-1);
		return (
			<div>
				<h2>Agregados Recientemente</h2>
				<MovieCarousel movies={newest}/>
				<h2>Clásicos</h2>
				<MovieCarousel movies={classics}/>
				<h2>Populares</h2>
				<MovieCarousel movies={popular}/>
				<h2>Recomendadas</h2>
				<MovieCarousel movies={recommended}/>
			</div>
		)
	}
}

export default MovieSliders;
