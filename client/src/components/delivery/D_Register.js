import React, { Component } from 'react'

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
		register({
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
 			return <Redirect to='/chat1' />
 		} else {
	   	return (
	   		<div>
	   			<div className="nameTitle">Slacker</div>
	 				<form className="inputContainer" onSubmit={this.handleSubmit}>
	 					<div className="inputField">
		 					<label htmlFor="username">Username</label>
		 					<input className="inputBox" type="text" name="username" onChange={this.handleChange} value={this.state.username} />
		 				</div>
		 				<div className="inputField">
		 					<label htmlFor="password">Password</label>
	 						<input className="inputBox" type="password" name="password" onChange={this.handleChange} value={this.state.password} />
	 					</div>
	 					<button className="loginSubmit" type="submit">Submit</button>
	 				</form>
	 			</div>
	   	)
 		}
   	
 	}
}

export default D_Register