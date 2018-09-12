import React, { Component } from 'react'
import { getDefault } from '../../actions/donateActions'
import { makeDonation, getTime } from '../../actions/donateActions'
import {api, withAuth } from '../Authentication'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'
import { Redirect } from 'react-router-dom'


class DefaultDonations extends Component{
	state ={
		donations:[],
		dish: '',
		trays:'',
		value:'',
		food_id:api.getProfile().id,
		time:'',
		confirm: !!false,
		deffs: !!false,
		thanks: false
		
	}

	componentDidMount(){
		getDefault(this.state.food_id)

		console.log(this.state.deffs)		
	}

// HANDLE THE CLICK OF THE BUTTON
handleClick = (e) =>{
	this.setState({
		confirm: !this.state.confirm
	})
}

handleView = (e) =>{
	this.setState({
		deffs: !this.state.deffs
	})
}

// HANDLE THE DEFAULT DONATION
	 handleSubmit = (e) =>{
		let value = e.target.elements.val.value
		let tray = e.target.elements.tr.value
		let nam = e.target.elements.nam.value

			this.setState({
				dish: nam,
				trays: tray,
				value: value,
				time: getTime()
			})

		e.preventDefault()
		
		if(this.state.confirm === !true ){
			makeDonation({
				dish:this.state.dish,
				trays:this.state.trays,
				value:this.state.value,
				food_id:this.state.food_id,
				donate_time:this.state.time
			})
			this.setState({
				thanks: true
			})			
		}
		
	 }

	render(){
		let confirm
		let allDefs 

		if(this.state.confirm){
			confirm = 
				<div id="pleaseConfirm">
					<p>Please Click "Donate" Again To Confirm Donation</p> 	
				</div>
		}

		if(this.state.thanks === true){
			return	<Redirect to="/restaurant/thankyou" />
		}
		if(this.state.deffs){
			allDefs = 
		<div className='defaultContain'>
						
			{this.props.defaultD.map(data =>(
				<form id='defaults' onSubmit={this.handleSubmit.bind(this)} >	
					<label>Dish Name:</label>
						<input type="text" value={data.dish} name ='nam' readonly />
					<label>Dish Price ($$):</label>
						<input type="text" value={data.value} name='val' readonly />
						<label>Amount Donated (Trays):</label>
						<input type="text" value={data.trays} name='tr'  readonly />
							<Button
								color='blue'
								type='submit'
								id='shadow'
								onClick={this.handleClick}
								>
								Donate
							</Button>
							{confirm}
					
				</form>	
			))}
		</div>
	}
		return(
			<div id="deffs">
				<span id='clickMe' onClick={this.handleView}>View Default Donations</span>
				{allDefs}
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