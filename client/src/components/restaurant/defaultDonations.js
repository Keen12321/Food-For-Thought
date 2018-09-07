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

	render(){
		return(
			<div className='defaultContain'>			
			{this.props.defaultD.map(data =>(
				<div id='defaults'>	
					<h2>Dish Name: {data.dish}</h2>
					<ul>
						<li>Price: ${data.value}</li>
						<li>Amount: {data.trays} Trays</li>
							<Button
								color='blue'
								>
								Donate
							</Button>
					</ul>
				</div>	
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
