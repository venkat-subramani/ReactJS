import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NameSpaceComponent extends Component {
	render() {	
    return (
		<table>
			{this.props.children}
		</table>
    );
  }
}

NameSpaceComponent.Heading = class Heading extends Component {
  render() {	
    return (
		<th>{this.props.heading}</th>
    );
  }
}

NameSpaceComponent.Headings = class Headings extends Component {
  render() {
	var headings = this.props.headings.map((name, i) => <NameSpaceComponent.Heading key={i} heading={name} />)
    return (
		<thead><tr>{headings}</tr></thead>
    );
  }
}

NameSpaceComponent.Row = class Row extends Component {
	render() {
		return(
			<tr>
				<td>{this.props.data.id}</td>
				<td>{this.props.data.name}</td>
				<td>{this.props.data.age}</td>
			</tr>
		)
	}
}

NameSpaceComponent.Rows = class Rows extends Component {
	render() {
		var data = this.props.data.map((d, i) => <NameSpaceComponent.Row key={i} data={d} />)
		return (
			<tbody>{data}</tbody>
		)
	}
}

class App extends Component {
  render() {
	var header = "My first React App for 201 course";
	var headings = ['Id', 'Name', 'Age'];
	var data = [{'id': 1, 'name': 'Abc1', 'age': 22},
				{'id': 2, 'name': 'Abc2', 'age': 24},
				{'id': 3, 'name': 'Abc3', 'age': 25},
				{'id': 4, 'name': 'Abc4', 'age': 23},
				{'id': 5, 'name': 'Abc5', 'age': 24}];
	
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{this.props.title + header} </h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
		<NameSpaceComponent>
			<NameSpaceComponent.Headings headings={headings} />
			<NameSpaceComponent.Rows data={data} />
		</NameSpaceComponent>
      </div>
    );
  }
}

export default App;