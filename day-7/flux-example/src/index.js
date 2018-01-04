import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import List from './components/List';


ReactDOM.render(<Router>
	<Route path="/" component={List} />
</Router>, document.getElementById('root'));
