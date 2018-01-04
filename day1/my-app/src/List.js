import React, { Component } from 'react';

class List extends Component {
  render() {
	var names = ['Name 1', 'Name 2', 'Name 3', 'Name 4', 'Name 5'];
	var nameList = names.map((name, i)=> <li key={i}>{name}</li>)
    return (
      <div>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default List;
