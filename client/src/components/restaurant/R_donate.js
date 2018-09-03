import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import { makeDonation, donateForm } from '../../actions/donateActions'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import { api } from '../Authentication'

class Donate extends Component {
	state = {
		dish: '',
		trays: '',
		value: '',
		food_id: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		donateForm(this.state.dish)
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('Successful donation made.')

		makeDonation({
			dish: this.state.dish,
			trays: this.state.trays,
			value: this.state.value,
			food_id: api.getProfile().id
		})
	}

	render() {
		// let invalidDish
		// let invalidValue
		// if (!this.state.validateValue) {
		// 	invalidDish = <Message
	 //      warning
	 //      header='Action Forbidden'
	 //      content='Plus input a valid currency amount.'
	 //    />
		// }
		// if (!this.state.dish) {
		// 	invalidDish = <Message
	 //      warning
	 //      header='Action Forbidden'
	 //      content='Plus input a valid dish name.'
	 //    />
		// }

		// if (!this.state.validateValue) {
		// 	invalidDish = <Message
	 //      warning
	 //      header='Action Forbidden'
	 //      content='Plus input a valid currency amount.'
	 //    />
		// }

		return (
			<Container className="donate-container">
				<Header>Make a Donation</Header>

				<Form onSubmit={this.handleSubmit} widths='equal'>
					<Form.Field>
						<Form.Input 
							label='Title'
							type='text'
							placeholder='Food Item'
							name='dish'
							// id='myInp'
							value={this.state.dish}
							onChange={this.handleChange} 
							/* onClick={this.handleClick2} */
						/>
					</Form.Field>
					
			    <Form.Field 
			    	label='How Many?' 
			    	control='select' 
			    	name='trays'
			    	// id='mySelect'
			    	onChange={this.handleChange} 
			    	value={this.state.trays} 
			    	/* onClick={this.handleClick} */
		    	>
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
					
					<Form.Field>
						<Form.Input 
							label='Value' 
							type='text' 
							placeholder='$$' 
							name='value'
							onChange={this.handleChange}
							value={this.state.value}
						/>
					</Form.Field>

	    		<Form.Field>
		    		<Button 
		    			color='green'
		    			type='submit'
		    			fluid
	    			>Submit</Button>
    			</Form.Field>

			  </Form>
			</Container>
		)
	}
}

export default Donate
