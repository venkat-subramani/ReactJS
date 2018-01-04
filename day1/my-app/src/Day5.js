import React, { Component } from 'react';
import Content from './Content';
import logo from './logo.svg';
import './App.css';

var newData = {
	data1: 'Data1 from HOC....',
	data2: 'Data2 from HOC....'
}

var myHoC = ComposedComponent => class extends Component{
	componentDidMount(){
		this.setState({
			data1: newData.data1,
			data2: newData.data2
		});
	}
	
	render(){
		return(
			<ComposedComponent {...this.props}{...this.state} />
		)
	}
}

class App extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  data: 0
	  }
  }
  
  setNewNumber() {
	  this.setState({
		  data: this.state.data + 1
	  })
  }
  
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
		<div>
			 <button onClick={this.setNewNumber.bind(this)}>Increment</button> 
			<Content myNumber={this.state.data} />
		</div>
		<h1>{this.props.data1}</h1>
		<h1>{this.props.data2}</h1>
      </div>
    );
  }
}

export default myHoC(App);
