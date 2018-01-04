import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import Login from './components/Login';
import Nav from './components/Nav';
import Add from './components/Add';
import Users from './components/Users';
import About from './components/About';

import './index.css';

ReactDOM.render(<Router history={hashHistory}>
	<Route path="/" component={Login} />
	<Route path="/nav" component={Nav}>
		<IndexRoute component={Add} />
		<Route path="/add" component={Add} />
		<Route path="/users" component={Users} />
		<Route path="/about/:name" component={About} />
	</Route>
</Router>, document.getElementById('root'));
