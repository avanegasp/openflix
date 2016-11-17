import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../App.css'
import { getMovieInfo } from '../utils/getMovieInfo'


const styles = {
  MovieInfoTabs: {   
    color: 'white',
    marginTop: '30px',
    border: '2px solid #FF931E'
  }
}

class MovieInfoTabs extends Component {
	handleSelect(index, last) {
    	console.log('Selected tab: ' + index + ', Last tab: ' + last);
  	}
  	conponentDidMount(){
  		console.log(this.props)
  	}
  	render() {  		
    	return (
    		<div style={styles.MovieInfoTabs}>
	    		<Tabs 
	    		className="tabWrapper"
	    		onSelect={this.handleSelect}
	    		selectedIndex={0}
	    		>
	    			<TabList className="tabNav">
			    		<Tab>Overview</Tab>
			    		<Tab>Trailer</Tab>
			    		<Tab>Details</Tab>
		    		</TabList>
		    		<TabPanel className="tabPanel">
		    			<MovieOverview/>
		    		</TabPanel>
		    		<TabPanel className="tabPanel">
		    			<MovieTrailer/>
		    		</TabPanel>
		    		<TabPanel className="tabPanel">
		    			<MovieDetails/>
		    		</TabPanel>
	    		</Tabs>
			</div>
		);
	}
}


class MovieOverview extends Component {
	render(){
		return (
			<div>
				<h3>Overview</h3>
				<h4>Movie Title</h4>
				<p>Movie description......
				..............</p>
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