import React, { Component } from 'react'
import validator from 'validator'
import { withAuth } from './Authentication'
import {Redirect, Link} from 'react-router-dom'
import {api} from './Authentication'
import { Container, Header, Button, Icon, Form, Input } from 'semantic-ui-react'

class D_Login extends Component {
	state = {
		email: '',
		password: '',
		redirect: false,
		redirectTo: '',
		buttonColor: '',
		iconColor: '',
		validateEmail: true
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
		
		if(this.state.email !== '' && this.state.password !== '') {
			this.setState({
				buttonColor: 'blue'
			})
		}

		if (validator.isEmail(this.state.email)) {
			this.setState({
				iconColor: 'green'
			})
		} else {
			this.setState({
				iconColor: 'red'
			})
		}
	}
	
	handleSubmit = (e) => {
		e.preventDefault()
		if(this.state.email !== '' && this.state.password !== '') {
			this.props.signin(this.state.email, this.state.password, () => {
				if (api.getProfile().type === 'Restaurant') {
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
		} else {
			this.setState({
				validateEmail: false,
			})
		}
	}

 	render() {
 		let { redirect, redirectTo } = this.state
 		let incorrectEmailValidation

 		if (!this.state.validateEmail) {
			incorrectEmailValidation = <div className="wrongField">Please Enter Valid Email</div>
		} 

 		if (redirect) {
 			return <Redirect to={redirectTo} />
 		} else {
	   	return (
	 			<div className="loginContainer">
	   			<div className="loginTitleContainer">
	   				<i id="loginLogo" className="fa fa-cutlery" />
	   				<div id="loginTitle">Login</div>
	   			</div>

	 				<Form size='huge' className="loginForm" onSubmit={this.handleSubmit}>
	 					<Form.Input className='red' name='email' type='email'
	 						fluid icon={<Icon name='user' color={this.state.iconColor} />} 
	 						onChange={this.handleChange} value={this.state.email} 
	 						iconPosition='left' placeholder='Email' />
	 					{incorrectEmailValidation}

	 					<Form.Input iconPosition='left' name='password'
	 						fluid icon={<Icon name='key' color={this.state.iconColor} />}
	 						onChange={this.handleChange} value={this.state.password} 
	 						placeholder='Password' type='password' />
	 					
	 					<Button className="loginSubmit" type="submit" 
	 						color={this.state.buttonColor} size='big'>LOGIN</Button>

	 					<Link className="registrationLink" to="/register">
	 						Not a Registered User? Register Here</Link>
	 				</Form>
	 			</div>
	   	)
   	}
 	}
}

export default withAuth(D_Login)