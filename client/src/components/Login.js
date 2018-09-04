import React, { Component } from 'react'
import { withAuth } from './Authentication'
import {Redirect, Link} from 'react-router-dom'
import {api} from './Authentication'
import { Container, Header, Button, Icon, Form, Input } from 'semantic-ui-react'

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
	   			
	   			<Container className="loginTitleContainer">
	   				<Header id="loginTitle">
	   					<Icon name='food' />
	   					<Header.Content>Login</Header.Content>
   					</Header>
	   			</Container>

	 				<Form size='huge' className="loginForm" onSubmit={this.handleSubmit}>
	 					<Form.Input className='red' fluid icon='user'  iconPosition='left' name='email' type='email' onChange={this.handleChange} value={this.state.email} placeholder='Email' />
	 					{incorrectEmailValidation}
	 					<Form.Input fluid icon='key' iconPosition='left' name='password' onChange={this.handleChange} value={this.state.password} placeholder='Password' type='password' />
	 					<Button className="loginSubmit" type="submit" color={this.state.buttonColor} size='big'>LOGIN</Button>
	 					<Link className="registrationLink" to="/register">Not a Registered User? Register Here</Link>
	 				</Form>

	 			</Container>
	   	)
   	}
 	}
}

export default withAuth(D_Login)