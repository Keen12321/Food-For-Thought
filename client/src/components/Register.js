import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {registerUser} from '../actions/loginActions'

class Register extends Component {
 	state = {
		email: '',
		password: '',
		address: '',
		phone: '',
		type: '',
		redirect: false,
		redirectTo: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		registerUser({
			email: this.state.email,
			password: this.state.password,
			address: this.state.address,
			phone: this.state.phone,
			type: this.state.type
		}, (userType) => {
			if (userType === 'restaurant') {
				this.setState({
					redirect: true,
					redirectTo: '/restaurant'
				})
			} else {
				this.setState({
					redirect: true,
					redirectTo: '/delivery'
				})
			}
		})
	}

 	render() {
 		const { redirect, redirectTo } = this.state


 		if (redirect) {
 			return <Redirect to={redirectTo} />
 		} else {
	   	return (
	   		<div className="loginContainer">
	   			<div className="loginTitleContainer">
	   				<i id="loginLogo" className="fa fa-cutlery" />
	   				<div id="loginTitle">Register</div>
	   			</div>
	 				<form className="loginForm" onSubmit={this.handleSubmit}>
	 					<div className="userTypeContainer">
		 					<label className="userType" forhtml="type">
		 						<input className="userTypeRadio" type="radio" name="type" value="Delivery" checked={this.state.type === "Delivery"} onChange={this.handleChange} />
		 						<div>Delivery</div>
		 					</label>
		 					<div>OR</div>
		 					<label className="userType" forhtml="type">
		 						<input className="userTypeRadio" type="radio" name="type" value="Restaurant" checked={this.state.type === "Restaurant"} onChange={this.handleChange} />
		 						<div>Restaurant</div>
		 					</label>
		 				</div>
	 					<div className="loginInputField">
	 						<i className="fa fa-user" />
		 					<input className="loginInputBox" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
		 				</div>
		 				<div className="loginInputField">
		 					<i className="fa fa-key" />
	 						<input className="loginInputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
	 					</div>
	 					<div className="loginInputField">
	 						<i className="fa fa-home" />
	 						<input className="loginInputBox" type="text" name="address" onChange={this.handleChange} value={this.state.address} placeholder="Address" />
	 					</div>
	 					<div className="loginInputField">
	 						<i className="fa fa-mobile" />
	 						<input className="loginInputBox" type="tel" name="phone" onChange={this.handleChange} value={this.state.phone} placeholder="Phone #" />
	 					</div>
	 					<button className="loginSubmit" type="submit">Login</button>
	 				</form>
	 			</div>
	   	)
 		}
 	}
}

export default Register