import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

class MoviePlayer extends Component {
	constructor(props) {
		super()
		this.state = {
			movie: {}
		}
	}
	goBack(){
		this.context.router.push('/home')
	}
	componentWillReceiveProps(nextProps) {
	  this.setState({
	  	movie: this.props.movies.find(movie => movie.id === this.props.params.movieId)
	  })
	}
	render(){
		console.log(this.props.movies)
		return (
			<div className="playerWrapper">
				<button className="backButton" onClick={this.goBack.bind(this)}>Back</button>
				<ReactPlayer height={"100vh"} className="player" controls={true} url={this.state.movie.url} />
			</div>
		)
	}
}

MoviePlayer.contextTypes = {
	router: React.PropTypes.object
}

export default MoviePlayer;
