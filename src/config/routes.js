import React from 'react'; 
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Main from '../components/Main';
import Home from '../components/Home';
import UserMovieList from '../components/UserMovieList';
import MoviePlayer from '../components/MoviePlayer';

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Main}/>
			<Route path='/home' component={Home}/>
			<Route path='/userlist'component={UserMovieList}/>
			<Route path='/moviePlayer' component={MoviePlayer}/>
		</Route>
	</Router>
)

export default routes
