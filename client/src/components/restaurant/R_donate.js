import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {makeDonation} from '../../actions/donateActions'
import {Button, Form, Container, Header, Message} from 'semantic-ui-react'
import {api} from '../Authentication'

class Donate extends Component {
	state = {
		dish: '',
		trays: '',
		value: '',
		food_id: '',
		validateDish: true,
		validateTrays: true,
		validateValue: true
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log('is changed')
	}

	handleSubmit = (e) => {
		e.preventDefault()
		console.log('made donation')

		if (this.state.dish !== '' && this.state.Trays !== '' && this.state.Value !== '') {
			makeDonation({
				dish: this.state.dish,
				trays: this.state.trays,
				value: this.state.value,
				food_id: api.getProfile().id
			})
		} else {
			this.setState({
				validateDish: false,
				validateTrays: false,
				validateValue: false
			})
		}
	}

	render() {
		let invalidDish
		let invalidValue

		if (!this.state.validateDish) {
			invalidDish = <Message
	      warning
	      header='Action Forbidden'
	      content='Plus input a valid dish name.'
	    />
		}

		if (!this.state.validateValue) {
			invalidDish = <Message
	      warning
	      header='Action Forbidden'
	      content='Plus input a valid currency amount.'
	    />
		}

		return (
			<Container className="donate-container">
				<Header>Make a Donation</Header>
				{/* Dish Name Input Field */}
				<Form onSubmit={this.handleSubmit} widths='equal'>
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
					{invalidDish}
					
					{/* Tray Amount Selection Field */}
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

					{/* Value Input Field */}
					<Form.Input 
						label='Value' 
						type='text' 
						placeholder='$$' 
						name='value'
						onChange={this.handleChange}
						value={this.state.value}
					/>
					{invalidValue}

					{/* Form Submit Button */}
	    		<Form.Field>
		    		<Button 
		    			color='green'
		    			type='submit'
		    			fluid
		    			as={Link} to='/restaurant'
	    			>Submit</Button>
    			</Form.Field>

		    	<Message 
		    		success 
		    		header='Form Completed' 
		    		content="You've successfully added your donation, thank you!" 
	    		/>
			  </Form>
			</Container>
		)
	}
}

export default Donate
