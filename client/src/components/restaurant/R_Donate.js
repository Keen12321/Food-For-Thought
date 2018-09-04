import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import { makeDonation, donateForm, getTime } from '../../actions/donateActions'
import { Button, Form, Container, Header, Message } from 'semantic-ui-react'
import { api } from '../Authentication'

class Donate extends Component {
	state = {
		dish: '',
		trays: '',
		value: '',
		food_id: '',
		donate_time:''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		donateForm(this.state.dish)
	}

	handleSubmit = (e) => {
		var sel = e.target.elements.trays.value
		var FT = e.target.elements.dish.value
		var foodCost = e.target.elements.value.value
		



		if(sel === '0' && FT === '' && foodCost === ''){
			document.getElementById('mySelect').style.background = "rgba(255,0,29,.2)"
			document.getElementById('foodTitle').style.background = "rgba(255,0,29,.2)"
			document.getElementById('foodVal').style.background = "rgba(255,0,29,.2)"
		}
		else if(FT === ''){
			document.getElementById('foodTitle').style.background = "rgba(255,0,29,.2)"
	
		}

		else if(sel === '0'){
			document.getElementById('mySelect').style.background = "rgba(255,0,29,.2)"

		}

		else if(foodCost === ''){
			document.getElementById('foodVal').style.background = "rgba(255,0,29,.2)"

		}
		
		else{
			var date = new Date()
			var hou = date.getHours()
			var min = date.getMinutes()
			var time = hou + ':' + min
			e.preventDefault()
			console.log('Successful donation made.')
			makeDonation({
				dish: this.state.dish,
				trays: this.state.trays,
				value: this.state.value,
				food_id: api.getProfile().id,
				donate_time: getTime()
			})
			this.props.history.push('/restaurant/thankyou')	
		}
	}

	render() {
	

		return (
			<Container className="donate-container">
				<Header>Make a Donation</Header>

				<Form onSubmit={this.handleSubmit.bind(this)} widths='equal'>
					<Form.Field>
						<Form.Input 
							label='Title'
							type='text'
							placeholder='Food Item'
							name='dish'
							id='foodTitle'
							value={this.state.dish}
							onChange={this.handleChange} 
							/* onClick={this.handleClick2} */
						/>
					</Form.Field>
					
			    <Form.Field 
			    	label='How Many?' 
			    	control='select' 
			    	name='trays'
			    	id='mySelect'
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
							id='foodVal'
						/>
					</Form.Field>

	    		<Form.Field>
		    		<Button 
		    			color='green'
		    			type='submit'
		    			fluid >
	    				Submit
	    			</Button>
    			
    			</Form.Field>

			  </Form>
			</Container>
		)
	}
}

export default Donate
