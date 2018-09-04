import React, { Component } from 'react'
import { withAuth } from './Authentication'
import {Redirect, Link} from 'react-router-dom'
import {api} from './Authentication'
import { Container, Header, Button, Icon, Form} from 'semantic-ui-react'

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
			 if (api.getProfile().type === 'Restaurant') 
			 {
				this.setState({
					redirect: true,
					redirectTo: '/restaurant'
				})
			}

			else if(api.getProfile().type === 'Delivery')
			{
				this.setState({
					redirect: true,
					redirectTo: '/delivery'
				})
			}
			else{
				document.getElementsByClassName('loginInputBox').style.background = 'rgba(255,0,29,.2)'
			}

		})
	}

 	render() {
 		let { redirect, redirectTo } = this.state

 		if (redirect) {
 			return <Redirect to={redirectTo} />
 		} else { 			
	   	return (
	 			<Container className="loginContainer">
	   			
	   			<div className="loginTitleContainer">
	   				<i id="loginLogo" className="fa fa-cutlery" />
	   				<Header id="loginTitle">Login</Header>
	   			</div>

	 				<form className="loginForm" onSubmit={this.handleSubmit}>
	 					<div className="loginInputField">
	 						<i className="fa fa-user" />
		 					<input className="loginInputBox" type="text" name="email" 
		 						onChange={this.handleChange} value={this.state.email} placeholder="Email" />
		 				</div>
		 				
		 				<div className="loginInputField">
		 					<i className="fa fa-key" />
	 						<input className="loginInputBox" type="password" name="password" 
	 							onChange={this.handleChange} value={this.state.password} placeholder="Password" />
	 					</div>
	 					
	 					<Button className="loginSubmit" type="submit">Login</Button>
	 					<Link className="registrationLink" to="/register">Not a Registered User? Register Here</Link>
	 				</form>

	 			</Container>
	   	)
   	}
 	}
}

export default withAuth(D_Login)