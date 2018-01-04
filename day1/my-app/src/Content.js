import React, { Component } from 'react';
import axios from 'axios';

class Content extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			posts: []
		};
	}
	
	componentWillMount(){
		console.log("Will Mount....");
	}
	
	componentDidMount(){
		console.log("Did Mount....");
		/*axios.get("https://www.reddit.com/r/reactjs.json").then(res => {
			const posts = res.data.data.children.map(obj => obj.data);
			this.setState({posts});
		})*/
		axios.get("friends.json").then(res => {
			const posts = res.data.map(obj => obj);
			this.setState({posts});
		})
	}
	
	shouldComponentUpdate(newProps, newState){
		return true;
	}
	
	componentWillUpdate(){
		console.log("Will Update....");
	}
	
	componentDidUpdate(){
		console.log("Did Update....");
	}
	
	componentWillUnMount(){
		console.log("Will UnMount....");
	}
	
	render(){
		return(
			<div>
				<h3>{this.props.myNumber}</h3>
				<ul>
					{this.state.posts.map(post => 
						<li key={post.id}>{post.name}</li>
					)}
				</ul>
			</div>
		)
	}
}

export default Content;
