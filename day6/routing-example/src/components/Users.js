import React, { Component } from 'react';

class User extends Component {
	render() {
		return(
			<tr>
				<td>{this.props.data.firstName}</td>
				<td>{this.props.data.lastName}</td>
				<td>{this.props.data.email}</td>
			</tr>
		)
	}
}

class Users extends Component {
  constructor(props){
	  super(props);
	  this.state = {
		  users: [{'firstName': 'Abc', 'lastName': 'xyz', 'email': 'abc@xyx.co'},
				{'firstName': 'Abc 1', 'lastName': 'xyz 1', 'email': 'abc1@xyx1.co'}]
	  }
  }
  
  render() {
	var data = this.state.users.map((user, i) => <User key={i} data={user} />)
				
    return (
      <div>
	    <table>
			<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Email</th>
			</tr>
			</thead>
			<tbody>{data}</tbody>
		</table>
	  </div>
    );
  }
}

export default Users;
