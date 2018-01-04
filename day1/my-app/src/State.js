import React, { Component } from 'react';

class State extends Component {
  state = {
	  first: false,
	  second: true,
	  heading: 'React state'
  }
  
  render() {
	const {first, second, heading} = this.state;
	setTimeout(() => {
		this.setState({
			heading: "React Heading Changed..."
		});
	}, 3000);
	
    return (
      <main>
		<h3>{heading}</h3>
        <section>
			<button disabled={first}>First</button>
		</section>
		<section>
			<button disabled={second}>Second</button>
		</section>
      </main>
    );
  }
}

export default State;
