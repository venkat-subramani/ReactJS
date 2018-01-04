import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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
      </div>
    );
  }
}

class Content extends Component{
	
	componentWillMount(){
		console.log("Will Mount....");
	}
	
	componentDidMount(){
		console.log("Did Mount....");
	}
	
	shouldComponentUpdate(newProps, newState){
		return true;
	}
	
	componentWillUpdate(){
		console.log("Will Update....");
	}
	
	componentDidUpdate(){
		console.log("Did Update....");
	}
	
	componentWillUnMount(){
		console.log("Will UnMount....");
	}
	
	render(){
		return(
			<div>
				<h3>{this.props.myNumber}</h3>
			</div>
		)
	}
}

export default App;
