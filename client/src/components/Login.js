import React, { Component } from 'react'
import { withAuth } from './Authentication'
import {Redirect, Link} from 'react-router-dom'
import {api} from './Authentication'

class D_Login extends Component {
	state = {
		email: '',
		password: '',
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
		this.props.signin(this.state.email, this.state.password, () => {
			if (api.getProfile().type === 'Restaurant') {
				this.setState({
					redirect: true,
					redirectTo: '/restaurant/'
				})
			} else {
				this.setState({
					redirect: true,
					redirectTo: '/delivery/'
				})
			}
		})
	}

 	render() {
 		let { redirect, redirectTo } = this.state

 		if (redirect) {
 			return <Redirect to={redirectTo} />
 		} else {
	   	return (
	 			<div className="loginContainer">
	   			<div className="loginTitleContainer">
	   				<i id="loginLogo" className="fa fa-cutlery" />
	   				<div id="loginTitle">Login</div>
	   			</div>
	 				<form className="loginForm" onSubmit={this.handleSubmit}>
	 					<div className="loginInputField">
	 						<i className="fa fa-user" />
		 					<input className="loginInputBox" type="text" name="email" onChange={this.handleChange} value={this.state.email} placeholder="Email" />
		 				</div>
		 				<div className="loginInputField">
		 					<i className="fa fa-key" />
	 						<input className="loginInputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
	 					</div>
	 					<button className="loginSubmit" type="submit">Login</button>
	 					<Link className="registrationLink" to="/register">Not a Registered User? Register Here</Link>
	 				</form>
	 			</div>
	   	)
   	}
 	}
}

export default withAuth(D_Login)