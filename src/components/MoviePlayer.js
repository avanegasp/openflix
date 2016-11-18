import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

class MoviePlayer extends Component {
	componentDidMount() {

	}
	goBack(){
		this.context.router.push('/home')
	}
	render(){
		return (
			<div className="playerWrapper">
				<button className="backButton" onClick={this.goBack.bind(this)}>Back</button>
				<ReactPlayer height={"100vh"} className="player" controls={true} url='https://www.youtube.com/watch?v=bS5P_LAqiVg'/>
			</div>
		)
	}
}

MoviePlayer.contextTypes = {
	router: React.PropTypes.object
}

export default MoviePlayer;
