import React, {Component} from 'react'
import validator from 'validator'
import {Redirect} from 'react-router-dom'
import {registerUser} from '../actions/loginActions'
import {Form, Button} from 'semantic-ui-react'
import logo from '../assets/fft.png'

class Register extends Component {
 	state = {
 		name: '',
		email: '',
		password: '',
		confirmPassword: '',
		location: '',
		phone: '',
		type: '',
		buttonColor: '',
		validateEmpty: true,
		validateEmail: true,
		validatePassword: true,
		redirect: false,
		redirectTo: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
		if(this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' && this.state.location !== '' && this.state.phone !== '' && this.state.type !== '') {
			this.setState({
				buttonColor:'blue'
			})
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		
		if (this.state.name !== '' && this.state.email !== '' && this.state.password !== '' && this.state.confirmPassword !== '' && this.state.location !== '' && this.state.phone !== '' && this.state.type !== '') {
			if (validator.isEmail(this.state.email)) {
				if (this.state.password === this.state.confirmPassword) {
					registerUser({
						name: this.state.name,
						email: this.state.email,
						password: this.state.password,
						location: this.state.location,
						phone: this.state.phone,
						type: this.state.type
					}, () => {
						if (this.state.type === 'Restaurant') {
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
						validatePassword: false,
						validateEmail: true
					})
				}
			} else {
				this.setState({
					validateEmail: false,
					validateEmpty: true
				})
			}
		} else {
			this.setState({
				validateEmpty: false
			})
		}
		console.log(this)
	}

 	render() {
 		let { redirect, redirectTo } = this.state
		let fieldEmpty
		let incorrectEmailValidation
		let incorrectPasswordValidation

		if (!this.state.validateEmpty) {
			fieldEmpty = <div className="wrongField">Fill Fields Before Submitting</div>
		}

		if (!this.state.validateEmail) {
			incorrectEmailValidation = <div className="wrongField">Please Enter Valid Email</div>
		} 

 		if (!this.state.validatePassword) {
 			incorrectPasswordValidation = <div className="wrongField">Passwords Do Not Match</div>
 		}

 		if (redirect) {
 			return <Redirect to={redirectTo} />
 		} else {
	   	return (
	   		<div className="loginContainer">
	   		<img src={logo} alt="Food For Thought" />
	   			<div className='loginright'>
	   			<div className="loginTitleContainer">
	   				<i id="loginLogo" className="fa fa-cutlery" />
	   				<div id="loginTitle">Register</div>
	   			</div>
	 				<Form className="loginForm" size='huge' onSubmit={this.handleSubmit}>
	 					<div className="userTypeContainer">
		 					<label className="userType" forhtml="type" id='shadow'>
		 						<input className="userTypeRadio" type="radio" name="type" 
		 							value="Delivery" checked={this.state.type === "Delivery"} 
		 							onChange={this.handleChange} />
		 						<div>Delivery</div>
		 					</label>
		 						<div>OR</div>
		 					<label className="userType" forhtml="type" id='shadow'>
		 						<input className="userTypeRadio" type="radio" name="type" 
		 							value="Restaurant" checked={this.state.type === "Restaurant"}
		 							onChange={this.handleChange} />
		 						<div>Restaurant</div>
		 					</label>
		 				</div>
		 				<Form.Input fluid icon='user' iconPosition='left' 
		 					name='name' onChange={this.handleChange} value={this.state.name} 
		 					placeholder='Username' />
		 				<Form.Input fluid icon='envelope' iconPosition='left' 
		 					name='email' onChange={this.handleChange} value={this.state.email} 
		 					placeholder='Email' />
		 				{incorrectEmailValidation}
	 					<Form.Input fluid icon='key' iconPosition='left' type='password' 
	 						name='password' onChange={this.handleChange} value={this.state.password} 
	 						placeholder='Password' />
	 					{incorrectPasswordValidation}
	 					<Form.Input fluid icon='key' iconPosition='left' type='password' 
	 						name='confirmPassword' onChange={this.handleChange} 
	 						value={this.state.confirmPassword} placeholder='Confirm Password' />
	 					{incorrectPasswordValidation}
	 					<Form.Input fluid icon='home' iconPosition='left' 
	 						name='location' onChange={this.handleChange} 
	 						value={this.state.location} placeholder='Address' />
	 					<Form.Input fluid icon='mobile' iconPosition='left' 
	 						name='phone' onChange={this.handleChange} 
	 						value={this.state.phone} placeholder='Phone #' />
	 					<Button className="loginSubmit" size="huge" id='shadow'
	 						color={this.state.buttonColor} type="submit" content="Click Here to Register" />
	 					{fieldEmpty}
	 				</Form>
	 				</div>
	 			</div>
  		 	)
 		}
 	}
}

export default Register