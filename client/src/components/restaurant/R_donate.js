import React, { Component } from 'react'
// import { makeDonation } from '../../actions/restaurant-actions/donateActions'
import { makeDonation } from '../../actions/donateActions'
import { Button, Form } from 'semantic-ui-react'
import HomeBar from './R_HomeBar'
import { api } from '../Authentication'


class Donate extends Component {
	state = {
		dish: '',
		trays: '',
		food_id: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
		console.log('is changed')
	}



	handleClick = (e) =>{
		document.getElementById('mySelect').style.background = "#fff"
	}

	handleClick2 = (e) =>{
		document.getElementById('myInp').style.background = "#fff"
	}



	handleSubmit = (e) => {
		e.preventDefault()
		const selector = document.getElementById('mySelect')
		const val = selector[selector.selectedIndex].value
		const name = e.target.elements.dish.value
		
		if(name === '' || val === '0')
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
				trays: this.state.trays,
				food_id: api.getProfile().id
			})

			this.props.history.push('/restaurant/thankyou') //re-routes page
		}
	
	}
	
	
	render() {
		return (
			<div>				
				<div className="donate-container">

					<Form onSubmit={this.handleSubmit.bind(this)} >
						<Form.Input label='Title' type='text' placeholder='Food Item' name='dish'
							onChange={this.handleChange} value={this.state.dish} id = 'myInp' onClick={this.handleClick2}/>

				    <Form.Field label='How Many?' control='select' name='trays'
				    	onChange={this.handleChange} value={this.state.trays} id='mySelect' onClick={this.handleClick}>
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
				    	<Button type='submit'>Submit</Button>
			    	</Form.Field>
				  </Form>
				</div>
			</div>
		)
	}
}

export default Donate
