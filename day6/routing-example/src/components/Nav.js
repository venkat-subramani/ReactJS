import React, { Component } from 'react';
import {Link} from 'react-router';

class Nav extends Component {
  render() {
    return (
      <div>
	    <nav>
		  <ul>
		    <li><Link to="/add">Add User</Link></li>
			<li><Link to="/users">All User</Link></li>
			<li><Link to="/about/venkat">About Venkat</Link></li>
		  </ul>
		</nav>
		<div className="content">
			{this.props.children}
		</div>
	  </div>
    );
  }
}

export default Nav;
