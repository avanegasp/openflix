import React, { Component } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import '../App.css'
import { getMovieInfo } from '../utils/getMovieInfo';
import ReactPlayer from 'react-player';


const styles = {
  movieInfoCont: {   
    color: 'white',    
    marginTop: '30px',    
    border: '2px solid #FF931E',
    padding: '0px'
  },
  contentInfo: {
  	marginTop: 0,
  	background: 'rgba(15, 30, 38, 0.8)',
  	height: '100%',
  	padding: '10px',
  	maxWidth: 300
  },
  movieInfoDescription: {  		
  	maxWidth: '300px'
  },
  movieInfoTitle:{
  	color: '#FF931E',
  	marginLeft: '20px'  	
  },
  videoWrapper:{
  	margin: '0 auto',
  	marginBotton: '10px'
  },
  posterBoxImg:{
  	float: 'right',
  	margin: '30px', 	
  	 	
  },
  posterImg:{  	
  	width: '300px',
  	height: '400px'
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
  		    background: 'linear-gradient(to right, rgba(255,255,255,0), rgba(255,0,0,1))',
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
		    			<MovieTrailer movie={this.state.movie} trailer={this.props.thisTrailer}/>
		    		</TabPanel>
		    		<TabPanel className="tabPanel">
		    			<MovieDetails movie={this.state.movie} trailer={this.props.thisTrailer}/>
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
					<h3 style={styles.movieInfoTitle}>{this.props.movie.title}</h3>
					<p>{this.props.movie.overview}</p>					
				</div>				
			</div>
		)
	}
}

class MovieTrailer extends Component {
	render(){		
		return(
			<div>				
				<h2 style={styles.movieInfoTitle}>{this.props.movie.title}</h2>				
			    <ReactPlayer  controls={true} url={this.props.trailer}  style={styles.videoWrapper}/>				
			</div>
		)
	}
}

class MovieDetails extends Component {
	render(){
		return (
			<div>
				<div style={styles.contentInfo}>
					<h2 style={styles.movieInfoTitle}>{this.props.movie.title}</h2>
					<p><strong  style={styles.movieInfoTitle}>Original Title: </strong>{this.props.movie.original_title}</p>
					<p><strong style={styles.movieInfoTitle}>Popularity:</strong> {Math.ceil(this.props.movie.popularity)}</p>
					<p><strong style={styles.movieInfoTitle}>Release Date:</strong> {this.props.movie.release_date}</p>		
				</div>
			</div>
			
		)
	}
}

Tabs.setUseDefaultStyles(false)

export default MovieInfoTabs;