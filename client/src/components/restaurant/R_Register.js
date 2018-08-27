import React, { Component } from 'react'
<<<<<<< HEAD

class R_Register extends Component {
=======
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

>>>>>>> 36375f4a5a38d0a5dbb136831a829a8c00c7e244
 	render() {
   	return (
 			
   	)
 	}
}

export default R_Register