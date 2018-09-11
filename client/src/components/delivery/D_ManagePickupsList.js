import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import {connect} from 'react-redux'
import { updatePickup } from '../../actions/donateActions'
import {Button, Header} from 'semantic-ui-react'

const Modal = ({ handleClose, show, children}) => {
	const showHideClassName = show ? 'modal modal-show' : 'modal modal-hidden'
	return (
		<div className={showHideClassName}>
			<section className='modal-main'>
				{children}
				<Button color='orange' icon='cancel' id='shadow' content='No, Cancel' onClick={handleClose} />
			</section>
		</div>
	)
}

class ManagePickupsList extends Component {
	state = {
		show: false,
		show3: false,
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
	showAddModal = () => {
		this.setState({
			show3: true
		})
	}
	hideAddModal = () => {
		this.setState({
			show3: false
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
	this.hideAddModal()
}

 render() {
   return (
   		<div>
         <div key={this.props.user.id} className="availablepickups ui vertical segment" id="segment">
	   			<div>
	  				<Header as='h3'>{this.props.user.name}</Header>
	  				<p>{this.props.user.location}</p>
	  			</div>
	  			<div id="leftfloat">
	  				<Header as='h4'>{this.props.user.dish} x {this.props.user.trays}</Header>
	  			</div>
	  			<div>
	  				<Button color='blue' icon='map' id='shadow' content='Add to Map' onClick={this.showAddModal} />
	  			</div>
         		<Modal show={this.state.show3} handleClose={this.hideAddModal}>
              <h2>Add the following pickup to your route:</h2>
              <p>{this.props.user.name}</p>
              <p>{this.props.user.location}</p>
              <p>{this.props.user.dish} x {this.props.user.trays}</p>
              <p>Distance From Location</p>
              <Button color='blue' icon='map' content='Add to Map' id="shadow" onClick={this.addPickup} />
         		</Modal>  			         
			    </div>
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

