import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import { makeDonation, getCurrentDate } from '../../actions/restaurant-actions/donateActions'
import HomeBar from './R_HomeBar'

class Donate extends Component {
	state = {
		name: '',
		trays: '',
		value: '',
		date: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		makeDonation({
			dish: this.state.dish,
			trays: this.state.trays,
			value: this.state.value,
		})
		getCurrentDate({
			date: this.state.date
		})
	}
	
	render() {
		return (
			<div>
				<HomeBar />
				<Container text className="donate-container">

					<Form onSubmit={this.handleSubmit}>
						<Header as='h3'>Make a Donation</Header>
						<Form.Field>
							<Form.Input label='Dish' type='text' placeholder='Food Item' name='dish'
								onChange={this.handleChange} value={this.state.dish} />

					    <Form.Field label='How Many?' control='select' name='trays'
					    	onChange={this.handleChange} value={this.state.trays}>
				        <option value='0'>0</option>
				        <option value='1'>1</option>
				        <option value='2'>2</option>
				        <option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='6'>6</option>
								<option value='7'>7</option>
								<option value='8'>8</option>
								<option value='9'>9</option>
								<option value='10'>10</option>
								<option value='11'>11</option>
								<option value='12'>12</option>
								<option value='13'>13</option>
								<option value='14'>14</option>
								<option value='15'>15</option>
								<option value='16'>16</option>
								<option value='17'>17</option>
								<option value='18'>18</option>
								<option value='19'>19</option>
								<option value='20'>20</option>
				      </Form.Field>
			      </Form.Field>

			      <Form.Input label='Value' type='text' placeholder='$$' name='value'
								onChange={this.handleChange} value={this.state.value} />

						<Form.Field>
				    	<Button color="orange" type='button' onClick={this.newitem}>Add More +</Button>
				    	<Link to='/restaurant'><Button color="green" floated='right' type='submit'>Submit</Button></Link>
			    	</Form.Field>
				  </Form>
				</Container>
			</div>
		)
	}
}

export default Donate
