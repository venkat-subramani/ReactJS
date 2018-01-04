import React, { Component } from 'react';

class Add extends Component {
	
  submit(){
	//this.props.onUserInput(this.refs.firstName.value, this.refs.lastName.value, this.refs.email.value);
	console.log(this.refs.firstName.value, this.refs.lastName.value, this.refs.email.value);
  }
  
  render() {
    return (
      <div>
	    <h1>Add User </h1>
		<form name="loginForm">
			<div className="form-group">
				First Name: <input type="text" ref="firstName" required/>
			</div>
			<div className="form-group">
				Last Name: <input type="text" ref="lastName" required/>
			</div>
			<div className="form-group">
				Email: <input type="email" ref="email" required/>
			</div>
			<button type="submit" onClick={this.submit.bind(this)}>Add User</button>
		</form>
	  </div>
    );
  }
}

export default Add;
