import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
<<<<<<< HEAD
import { registerDelivery } from '../../actions/delivery-actions/D_loginActions'
=======
import {deliveryRegister} from '../../actions/delivery/D_loginActions'
>>>>>>> 992697ab2527b9ed7ff84527120a66025dbaf842

class D_Register extends Component {
 	state = {
		username: '',
		password: '',
		redirectToReferrer: false
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
<<<<<<< HEAD
		registerDelivery({
=======
		deliveryRegister({
>>>>>>> 992697ab2527b9ed7ff84527120a66025dbaf842
			username: this.state.username,
			password: this.state.password
		}, () => {
			this.setState({
				redirectToReferrer: true
			})
		})
	}

 	render() {
 		const { redirectToReferrer } = this.state

 		if (redirectToReferrer) {
 			return <Redirect to='/' />
 		} else {
	   	return (
	   		<div>
	   			<div className="nameTitle">Login to your account</div>
	 				<form className="loginForm" onSubmit={this.handleSubmit}>
	 					<div className="loginInput">
		 					<input className="inputBox" type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="E-mail address" />
		 				</div>
		 				<div className="inputField">
	 						<input className="inputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
	 					</div>
	 					<button className="loginSubmit" type="submit">Login</button>
	 				</form>
	 			</div>
	   	)
 		}
 	}
}

export default D_Register