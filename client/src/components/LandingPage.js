import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class LandingPage extends Component {
 	render() {
	   	return (
	   		<div className="container">
	   			<div>
	   				<h1>Food For Thought</h1>
	   				<h2>I Want To</h2>
	   			</div>
	   			<div className="restaurantButton"> 
	   				<Link to={"/restaurauntLogin"}><i className="fa fa-cutlery"></i> Donate Food</Link>
	   			</div>
	   			<div className="deliveryButton">
	   				<Link to={"/deliveryLogin"}><i className="fa fa-truck"></i> Receive Food</Link>
	   			</div>
	   		</div>
	   	)
 	}
}

export default LandingPage

