import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../App.css'
import { getMovieInfo } from '../utils/getMovieInfo'


const styles = {
  movieInfoCont: {   
    color: 'white',
    marginTop: '30px',
    border: '2px solid #FF931E',
    padding: '0px'
  },
  contentInfo: {
  	marginTop: 0,
  	backgroundColor: 'red',
  	height: 300,
  	maxWidth: 200
  },
  movieInfoDescription: {
  	backgroundColor: 'black',
  	maxWidth: '300px'
  }
}

class MovieInfoTabs extends Component {
	constructor(props){
		super()
		this.state = {
			movie:{}
		}
	}
	handleSelect(index, last) {
    	console.log('Selected tab: ' + index + ', Last tab: ' + last);
  	}
  	componentDidMount(){
  		console.log(this.props)
  		getMovieInfo(this.props.thisMovie)
  		.then(res => {
  			this.setState({
  				movie: res.movie_results[0]
  			})
  		})
  	}
  	componentWillReceiveProps(nextProps)  {
  	  getMovieInfo(nextProps.thisMovie)
  	  .then(res => {
  	  	this.setState({
  	  		movie: res.movie_results[0]
  	  	})
  	  })
  	}
  	render() {
  		var style = {
  		  background:{
  		    backgroundImage:`url(http://image.tmdb.org/t/p/w1000/${this.state.movie.backdrop_path})`,
  		    backgroundSize: "cover"
  		  }
  		}
    	return (
    		<div style={styles.movieInfoCont}>
	    		<Tabs 
	    		className="tabWrapper"
	    		onSelect={this.handleSelect}
	    		selectedIndex={0}
	    		style={style.background}
	    		>
	    			<TabList className="tabNav">
			    		<Tab>Overview</Tab>
			    		<Tab>Trailer</Tab>
			    		<Tab>Details</Tab>
		    		</TabList>
		    		<TabPanel className="tabPanel">
		    			<MovieOverview movie={this.state.movie}/>
		    		</TabPanel>
		    		<TabPanel className="tabPanel">
		    			<MovieTrailer/>
		    		</TabPanel>
		    		<TabPanel className="tabPanel">
		    			<MovieDetails movie={this.state.movie}/>
		    		</TabPanel>
	    		</Tabs>
			</div>
		);
	}
}

class MovieOverview extends Component {
	render(){
		return (
			<div style={styles.contentInfo}>
				<div style={styles.movieInfoDescription}>
					<h3>Overview</h3>
					<h4>{this.props.movie.title}</h4>
					<p>{this.props.movie.overview}</p>
				</div>
			</div>
		)
	}
}

class MovieTrailer extends Component {
	render(){
		return(
			<div>Trailer</div>

		)
	}
}

class MovieDetails extends Component {
	render(){
		return (
			<div>Details</div>
		)
	}
}

Tabs.setUseDefaultStyles(false)

export default MovieInfoTabs;