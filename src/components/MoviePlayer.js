import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import '../App.css';

class MoviePlayer extends Component {
	render(){
		return (
			<div className="playerWrapper">
				<ReactPlayer height={"100vh"} className="player" controls={true} url='https://www.youtube.com/watch?v=bS5P_LAqiVg'/>
			</div>
		)
	}
}

export default MoviePlayer;
