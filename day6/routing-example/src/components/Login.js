import React, { Component } from 'react';
import {Link} from 'react-router';

class Login extends Component {
  render() {
    return (
      <div>
	    <h1>Login </h1>
		<form name="loginForm">
			<div className="form-group">
				<input type="text" placeholder="UserName.." required/>
			</div>
			<div className="form-group">
				<input type="password" placeholder="Password.." required/>
			</div>
			<button type="submit"><Link to="/nav">Submit</Link></button>
		</form>
	  </div>
    );
  }
}

export default Login;
