import React, { Component } from 'react'

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
	 			<div>
	 				<form className="deliveryLoginForm" onSubmit={this.handleForm}>
	 					<div className="inputField">
		 					<label htmlFor="username">Username</label>
		 					<input className="inputBox" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
		 				</div>
		 				<div className="inputField">
		 					<label htmlFor="password">Password</label>
	 						<input className="inputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
	 					</div>
	 					<input className="loginSubmit" type="submit" value="Submit" />
	 				</form>
	 			</div>
	   	)
   	}
 	}
}

export default R_Login