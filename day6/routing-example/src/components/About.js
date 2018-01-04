import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
	    <h1>Hello {this.props.params.name}</h1>
	  </div>
    );
  }
}

export default About;
