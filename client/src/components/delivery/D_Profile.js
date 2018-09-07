import React, {Component} from 'react'
import {withAuth, api} from '../Authentication'
import {changeUserInfo} from '../../actions/loginActions'
import {Link} from 'react-router-dom'
import {Header, Segment, Button, Form} from 'semantic-ui-react'

class D_Profile extends Component {
	state = {
		name: api.getProfile().name,
		email: api.getProfile().email,
		location: api.getProfile().location,
		phone: api.getProfile().phone,
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]:e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		changeUserInfo({
			id: api.getProfile().id,
			name: this.state.name,
			email: this.state.email,
			location: this.state.location,
			phone: this.state.phone
		})
		this.props.signout()
	}
	render() {
		return (
			<div className="editProfileContainer">
				<Header as='h1' textAlign="center" attached='top' content="Edit Profile" />
				<Segment attached>
	        <Form size='huge' onSubmit={this.handleSubmit}>
	        	<Form.Input icon='user' iconPosition='left' name='name' id='shadow2' onChange={this.handleChange} value={this.state.name} />
	 					<Form.Input icon='envelope' id="shadow2" iconPosition='left' name='email' onChange={this.handleChange} value={this.state.email} />
	 					<Form.Input icon='home' id="shadow2" iconPosition='left' name='location' onChange={this.handleChange} value={this.state.location} />
	 					<Form.Input icon='mobile' id="shadow2" iconPosition='left' name='phone' onChange={this.handleChange} value={this.state.phone} />
	 					<Link to='/login'>
	 						<Button className="loginSubmit" id="shadow" size='huge' type="submit" content="Click to Save Changes" />
	 					</Link>
	 				</Form>
	 			</Segment>
			</div>
			)
		}
	}
export default withAuth(D_Profile)