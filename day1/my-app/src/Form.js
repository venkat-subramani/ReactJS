import React, { Component } from 'react';

class Form extends Component {
  submit(){
	this.props.onUserInput(this.refs.idInput.value, this.refs.nameInput.value, this.refs.ageInput.value);
  }
  
  render() {
    return (
      <form>
		<label id="id">Id : </label><input type="text" ref="idInput" />&emsp;
		<label id="name">Name : </label><input type="text" ref="nameInput" />&emsp;
		<label id="age">Age : </label><input type="number" ref="ageInput" />
		<p>
			<button type="button" onClick={this.submit.bind(this)}>Submit</button>
		</p>
      </form>
    );
  }
}

export default Form;
