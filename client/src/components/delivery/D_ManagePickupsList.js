import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import {connect} from 'react-redux'
import { updatePickup } from '../../actions/donateActions'
import { Container, Modal, Header, Button, Icon } from 'semantic-ui-react'

class ManagePickupsList extends Component {
	state = {
		accepted: null,
		reason: '',
		pickup_by: '',
		id: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	addPickup = (e) => {
		e.preventDefault()
		updatePickup({
			accepted: 'pending',
			id: this.props.user.id,
			pickup_by: api.getProfile().email,
			delivery_id: api.getProfile().id
		})
	}

 render() {
   return (
   		<div>
         	<div key={this.props.user.id} className="availablepickups ui vertical segment" id="lubba">
		   			<div>
		  				<h3>{this.props.user.name}</h3>
		  				<p>{this.props.user.location}</p>
		  			</div>
		  			<div id="schwifty">
		  				<h4>{this.props.user.dish} x {this.props.user.trays}</h4>
		  			</div>
		  			<div>
		  				<Header as='h4'>{this.props.user.trays} Trays of {this.props.user.dish}</Header>
		  			</div>
		  		</div>
         	<Modal trigger={<Button color='blue' size='large' icon='map marker alternate' />} closeOnDocumentClick='true'>
						<Header as='h2'>Add the following pickup to your route:</Header>
						<p>{this.props.user.name}</p>
						<p>{this.props.user.location}</p>
						<p>{this.props.user.dish} x {this.props.user.trays}</p>
						<p>Distance From Location</p>
						<Button color='blue' onClick={this.addPickup}>Add to Map</Button>
						<Button color='orange'>No, Cancel</Button>
         	</Modal>  			         
				</div>
   	)
 	}
}
function mapStateToProps(appState) {
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(ManagePickupsList))