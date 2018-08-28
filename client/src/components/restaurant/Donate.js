import React, { Component } from 'react'
import { Button, Form } from 'semantic-ui-react'

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
					<Form.Input label='Food Item' type='text' placeholder='Food Item' />

			    <Form.Field label='Main Tray Amount' control='select'>
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

		      <Form.Field label='Side Tray Amount' control='select'>
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
			    	<Button type='submit'>Submit</Button>
		    	</Form.Field>
			  </Form>

			</div>
		)
	}
}

export default Donate

// <input className="donate__food-type" type="text" value={this.state.foodItem} onChange={this.handleChange} name="food-item" placeholder="Food Item(s)" />