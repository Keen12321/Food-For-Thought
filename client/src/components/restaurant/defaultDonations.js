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
		time:'',
		confirm: !!false
	}

	componentDidMount(){
		getDefault(this.state.id)		
			// console.log(this.state.id)
			// this.setState({
			// 	confirm: false
			// })
			// console.log(this.state.confirm)
	}

// HANDLE THE CLICK OF THE BUTTON
handleClick = (e) =>{
	this.setState({
		confirm: !this.state.confirm
	})
	console.log(this.state.confirm)
}


// HANDLE THE DEFAULT DONATION
	 handleSubmit = (e) =>{
		let value = e.target.elements.val.value
		let tray = e.target.elements.tr.value
		let nam = e.target.elements.nam.value

			this.setState({
				dish: nam,
				tray: tray,
				value: value,
				time: getTime()
			})

		e.preventDefault()
		
		if(this.state.confirm === !true ){
			makeDonation({
				dish:this.state.dish,
				tray:this.state.tray,
				value:this.state.value,
				id:this.state.id,
				time:this.state.time
			})

			this.props.history.push('/restaurant/thankyou')
		}
		
	 }

	render(){
		let confirm

		if(this.state.confirm){
			confirm = 
				<div id="pleaseConfirm">
					<p>Please click "Donate" again to Confirm Donation</p> 	
				</div>
		}
		return(
			<div className='defaultContain'>
						
			{this.props.defaultD.map(data =>(
				<form id='defaults' onSubmit={this.handleSubmit.bind(this)} >	
					<label>Dish Name:</label>
						<input type="text" value={data.dish} name ='nam' readonly />
						<label>Dish Price ($$):</label>
						<input type="text" value={data.value} name='val' readonly />
						<label>Amount Donated:</label>
						<input type="text" value={data.trays} name='tr'  readonly />
							<Button
								color='blue'
								type='submit'
								onClick={this.handleClick}
								>
								Donate
							</Button>
							{confirm}
					
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
