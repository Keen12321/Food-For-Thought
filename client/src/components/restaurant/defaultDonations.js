import React, { Component } from 'react'
import { getDefault } from '../../actions/donateActions'
import {api, withAuth } from '../Authentication'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'


class DefaultDonations extends Component{
	state ={
		donations:[],
		dish: '',
		tray:'',
		value:'',
		id:api.getProfile().id
	}

	componentDidMount(){
		getDefault(this.state.id)		
			console.log(this.state.id)
	}
	//HANDLING WHAT HAPPENS AFTER CLICK  "MAYBE DELETE"
	 handleClick = (e) => {
		
		console.log(this.state.trays )
	 }
// HANDLE THE DEFAULT DONATION
	 handleSubmit = (e) =>{
		e.preventDefault()
	 }

	render(){
		return(
			<div className='defaultContain'>			
			{this.props.defaultD.map(data =>(
				<form id='defaults' onSubmit={this.handleSubmit.bind(this)}>	
					<h2>Dish Name: {data.dish}</h2>
						<input type="text" value={'price:' + data.value} />
						<input type="text" value={'Amount:' + data.trays + 'Trays'}/>
							<Button
								color='blue'
								type='submit'
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
