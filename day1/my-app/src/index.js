import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import App from './App';
//import App from './Day1';
//import App from './Day2';
//import App from './Day3';
//import App from './Day4';
import App from './Day5';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="Welcome, " />, document.getElementById('root'));
registerServiceWorker();
	
/* Day 5
 *setTimeout(function(){
	ReactDOM.unmountComponentAtNode(document.getElementById('root'));
}, 10000)*/
