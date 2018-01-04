import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';
import State from './State';

class App extends Component {
  render() {
	var header = "My first React App for 201 course";
	
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title + header} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<List />
		<State />
      </div>
    );
  }
}

export default App;
