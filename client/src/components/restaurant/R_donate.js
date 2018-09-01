import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { makeDonation } from '../../actions/donateActions'
import { Button, Form, Container, Header, Message } from 'semantic-ui-react'

class Donate extends Component {
	state = {
		dish: '',
		trays: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const selector = document.getElementById('mySelect')
		const val = selector[selector.selectedIndex].value
		const name = e.target.elements.dish.value
		
		if (name === '' || val === '0')
		{
			document.getElementById('mySelect').style.background = "rgba(255,0,29,.2)"
			document.getElementById('myInp').style.background = "rgba(255,0,29,.2)"
		}

		else if(name === '')
		{
			document.getElementById('myInp').style.background = "rgba(255,0,29,.2)"
		}

		else if(val === '0')
		{
			document.getElementById('mySelect').style.background = "rgba(255,0,29,.2)"
		}

		else
		{
			makeDonation({
				dish: this.state.dish,
				trays: this.state.trays
			})
			
			this.props.history.push('/restaurant/thankyou') //re-routes page
		}
	}

	// handleClick = (e) => {
	// 	document.getElementById('mySelect').style.background = "#fff"
	// }

	// handleClick2 = (e) => {
	// 	document.getElementById('myInp').style.background = "#fff"
	// }

	render() {
		return (
			<div>				
				<Container className="donate-container">

					<Header>Make a Donation</Header>

					<Form onSubmit={this.handleSubmit.bind(this)} success warning>
						<Form.Input 
							label='Title' 
							type='text' 
							placeholder='Food Item' 
							name='dish'
							id = 'myInp'
							value={this.state.dish}
							onChange={this.handleChange} 
							/* onClick={this.handleClick2} */
						/>

						{/* Dish Error Message */}
						<Message
				      warning
				      header='Action Forbidden'
				      content='Plus input a valid dish name.'
				    />

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

						<Form.Input 
							label='Value' 
							type='text' 
							placeholder='$$' 
							name='value'
							onChange={this.handleChange} 
							value={this.state.value} 
						/>

					{/* Value Error Message */}
						<Message
				      warning
				      header='Action Forbidden'
				      content='Plus input a valid currency amount.'
				    />

						<Form.Field>
				    	<Button 
				    		color="orange" 
				    		type='button' 
				    		onClick={this.newitem}
			    		>
				    		Add More +
			    		</Button>
				    	
				    	<Link to='/restaurant'>
				    		<Button 
				    			color="green" 
				    			floated='right' 
				    			type='submit'
			    			>
			    				Submit
		    				</Button>
	    				</Link>
			    	</Form.Field>

			    	<Message 
			    		success 
			    		header='Form Completed' 
			    		content="You've successfully added your donation, thank you!" 
		    		/>
				  </Form>

				</Container>
			</div>
		)
	}
}

export default Donate
