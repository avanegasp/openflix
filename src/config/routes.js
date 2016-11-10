import React, { Component } from 'react'; 
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import App from '../App';
import Main from '../components/Main';
import UserMovieList from '../components/UserMovieList'

const routes = (
	<Router history={hashHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Main}/>
			<Route path='/userlist'component={UserMovieList}/>
		</Route>
	</Router>
)

export default routes
