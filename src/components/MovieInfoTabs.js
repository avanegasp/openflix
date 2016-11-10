import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../App.css'

class MovieInfoTabs extends Component {
	handleSelect(index, last) {
    	console.log('Selected tab: ' + index + ', Last tab: ' + last);
  	}
  	render() {
    	return (
    		<div>
	    		<Tabs 
	    		className ="tabWrapper"
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
		    		<TabPanel>
		    			<MovieTrailer/>
		    		</TabPanel>
		    		<TabPanel>
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
				Overview
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