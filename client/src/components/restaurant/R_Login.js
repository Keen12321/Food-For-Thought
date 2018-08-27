import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import {Link, Redirect} from 'react-router-dom'

class R_Login extends Component {
	state = {
		redirectToReferrer: false,
		username: '',
		password: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	
	handleForm = (e) => {
		e.preventDefault()
		this.props.signin(this.state.username, this.state.password, () => {
			this.setState({
			 	redirectToReferrer: true 
			})
		})
	}

 	render() {
 		const { from } = this.props.location.state || { from: {pathname: this.props.defaultRedirect}}
 		const { redirectToReferrer } = this.state

 		if (redirectToReferrer) {
 			return <Redirect to={from} />
 		} else {
	   	return (
	 			<div className="loginContainer">
	   			<div className="loginTitle">Login to your account</div>
	 				<form className="loginForm" onSubmit={this.handleSubmit}>
	 					<div className="loginInput">
		 					<input className="loginInputBox" type="text" name="username" onChange={this.handleChange} value={this.state.username} placeholder="E-mail address" />
		 				</div>
		 				<div className="loginInput">
	 						<input className="loginInputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} placeholder="Password" />
	 					</div>
	 					<button className="loginSubmit" type="submit">Login</button>
	 				</form>
	 			</div>
	   	)
   	}
 	}
}

export default withAuth(R_Login)