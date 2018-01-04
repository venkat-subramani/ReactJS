import React, { Component } from 'react';
import ListStore from '../stores/listStore';
//import AddAction from '../actions/addAction';

class List extends Component {
  constructor(props){
	  super(props);
	  this.state={
		items : ListStore.getAll()
	  }
  }
  createNewItem(e){
	  //AddAction.addNewItem();
  }
  _onChange(){
	  this.setState({
		  items: ListStore.getAll()
	  })
  }
  
  render() {
    return (
      <div className="App">
        <h2>List Users</h2>
		<input type="text" required />
		{/*<Add items={this.state.items} onClick={this.createNewItem} /> */}
			{this.state.items}
      </div>
    );
  }
}

export default List;
