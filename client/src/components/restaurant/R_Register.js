import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import {restaurantRegister} from '../../actions/restaurant/R_loginActions'

class R_Register extends Component {
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
		restaurantRegister({
			username: this.state.username,
			password: this.state.password
		}, () => {
			this.setState({
				redirectToReferrer: true
			})
		})
	}

 	render() {
   	return (
 			<div></div>
   	)
 	}
}

export default R_Register