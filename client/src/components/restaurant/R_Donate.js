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
		donate_time:'',
		blankFields: true,
		blankCost: true,
		blankAmount: true,
		blankType: true,
		color: 'green',
		inColor: '#fff'
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		donateForm(this.state.dish)
	}

	handleClick = (e) =>{
		this.setState({
			color:'green',
			blankType: true,
			blankAmount: true,	
			blankCost: true,
			blankFields: true
		})
	}

	handleSubmit = (e) => {
		var sel = e.target.elements.trays.value
		var FT = e.target.elements.dish.value
		var foodCost = e.target.elements.value.value
		



		if(sel === '0' && FT === '' && foodCost === ''){
			this.setState({
				blankFields: false,
				color: "red",
				blankType: true,
				blankAmount: true,	
				blankCost: true			
			})
		}
		else if(FT === ''){
			this.setState({
				blankType: false,			
				color: "red",
				blankFields: true				
			})
		}

		else if(sel === '0'){
			this.setState({
				blankAmount: false,
				color: 'red',
				blankFields: true
				
			})

		}

		else if(foodCost === ''){
			this.setState({
				blankCost: false,
				color: 'red',
				blankFields: true
			})
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
		let blank_fields
		let blank_value  
		let blank_dish
		let blank_amount

			if(!this.state.blankFields)
			{
				blank_fields =
				<div id ='wrongg'>
					<ul>
						<li>Please tell us what Kind of food you are donating.</li>
						<li>Please tell us how many trays you are donating.</li>
						<li>Please provide a cost for your over all donation.</li>
					</ul>
				</div>
			}

			if(!this.state.blankType)
			{
				blank_dish = 
				<div id="wrongg">
					<ul>
						<li>Please tell us what Kind of food you are donating.</li>
					</ul>
				</div>				 
			}

			if(!this.state.blankAmount)
			{
				blank_amount = <div id="wrongg">
					<ul>
						<li>Please Tell us how many trays you are donating.</li>
					</ul>
				</div>
			}

			if(!this.state.blankCost)
			{
					blank_value = 
					<div id="wrongg">
						<ul>
							<li>Please Tell us what the value of this donation is</li>
						</ul>
					</div>
			}

		return (
			<Container className="donate-container">
				<Header id='headerD'>Make a Donation</Header>

				<Form onSubmit={this.handleSubmit.bind(this)} widths='equal'>
					<Form.Field
					color={this.state.color}>
					{blank_dish}
						<Form.Input 
							label='Title'
							type='text'
							placeholder='Food Item'
							name='dish'
							id='foodTitle'
							value={this.state.dish}
							onChange={this.handleChange}
							onClick={this.handleClick} 
						/>
					</Form.Field>
					{blank_amount}
			    <Form.Field 
			    	label='How Many?' 
			    	control='select' 
			    	name='trays'
			    	id='mySelect'
			    	onChange={this.handleChange} 
			    	value={this.state.trays} 
			     	onClick={this.handleClick} 
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
					{blank_value}
					<Form.Field>
						<Form.Input 
							label='Value' 
							type='text' 
							placeholder='$$' 
							name='value'
							onChange={this.handleChange}
							value={this.state.value}
							id='foodVal'
							onClick={this.handleClick}
						/>
					</Form.Field>

	    		<Form.Field>
		    		<Button 
		    			color={this.state.color}
		    			type='submit'
		    			fluid >
	    				Submit
	    			</Button>
    			</Form.Field>
			  </Form>
			  {blank_fields}
			</Container>
		)
	}
}

export default Donate
