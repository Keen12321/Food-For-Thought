import React, { Component } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

class Donate extends Component {
	state = {
		foodItem: '',
		foodSize: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		return (
			<div className="donate-container">
				<Form>
			    <Form.Field>
			      <label>Food Item</label>
			      <input placeholder='Food Item' />
			    </Form.Field>
			    <Form.Field>
			      <label>Food Size</label>
			      <input placeholder='Size' />
			    </Form.Field>
			    <Form.Field>
			      <Checkbox label='I agree to the Terms and Conditions' />
			    </Form.Field>
			    <Button type='submit'>Submit</Button>
			  </Form>
			</div>
		)
	}
}

export default Donate

// <input className="donate__food-type" type="text" value={this.state.foodItem} onChange={this.handleChange} name="food-item" placeholder="Food Item(s)" />