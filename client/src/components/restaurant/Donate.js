import React, { Component } from 'react'
import { makeDonation } from '../../actions/restaurant-actions/donateActions'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import HomeBar from './R_HomeBar'

class Donate extends Component {
	state = {
		name: '',
		trays: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log('is changed')
	}

	handleSubmit = (e) => {
		e.preventDefault()
		makeDonation({
			name: this.state.name,
			trays: this.state.trays
		})
	}
	
	
	render() {
		return (
			<div>
				<HomeBar />
				<Container className="donate-container">

					<Form onSubmit={this.handleSubmit}>
						<Header as='h3'>Make a Donation</Header>
						<Form.Field>
							<Form.Input label='Title' type='text' placeholder='Food Item' name='name'
								onChange={this.handleChange} value={this.state.name} />

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

						<Form.Field>
				    	<Button color="orange" type='button' onClick={this.newitem}>Add Item</Button>
				    	<Button color="green" type='submit'>Submit</Button>
			    	</Form.Field>
				  </Form>
				</Container>
			</div>
		)
	}
}

export default Donate
