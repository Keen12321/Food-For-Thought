import React, { Component } from 'react'
import { getDefault } from '../../actions/donateActions'
import { makeDonation, donateForm, getTime } from '../../actions/donateActions'
import {api, withAuth } from '../Authentication'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'


class DefaultDonations extends Component{
	state ={
		donations:[],
		dish: '',
		tray:'',
		value:'',
		id:api.getProfile().id,
		time:''
	}

	componentDidMount(){
		getDefault(this.state.id)		
			console.log(this.state.id)
	}


// HANDLE THE DEFAULT DONATION
	 handleSubmit = (e) =>{
		let value = e.target.elements.val.value
		let tray = e.target.elements.tr.value
		let nam = e.target.elements.nam.value

			this.setState({
				dish: nam
			})

		e.preventDefault()
		
		console.log(this.state.dish)
		
	 }

	render(){
		let confirm
		return(
			<div className='defaultContain'>
			{confirm}			
			{this.props.defaultD.map(data =>(
				<form id='defaults' onSubmit={this.handleSubmit.bind(this)} >	
					<label>Dish Name:</label>
						<input type="text" value={data.dish} name ='nam' />
						<label>Dish Price ($$):</label>
						<input type="text" value={data.value} name='val' />
						<label>Amount Donated:</label>
						<input type="text" value={data.trays} name='tr'  />
							<Button
								color='blue'
								type='submit'
								onClick={this.handleClick}
								>
								Donate
							</Button>
					
				</form>	
			))}
			
			</div>
		)
	}
}

function mapStatetoProps(appState) {
	return {
		defaultD: appState.appReducer.defaultD
	}
}



export default withAuth(connect(mapStatetoProps)(DefaultDonations))
