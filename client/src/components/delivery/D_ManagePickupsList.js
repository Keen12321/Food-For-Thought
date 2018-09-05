import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import {connect} from 'react-redux'
import { updatePickup } from '../../actions/donateActions'


const Modal = ({ handleClose, show, children}) => {
	const showHideClassName = show ? 'modal modal-show' : 'modal modal-hidden'
	return (
		<div className={showHideClassName}>
			<section className='modal-main'>
				{children}
				<button className="ui orange button" onClick={handleClose}>No, Cancel</button>
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
         	<div key={this.props.user.id} className="pickups ui vertical segment" id="lubba">
	   			<div>
	  				<h3>{this.props.user.name}</h3>
	  				<p>{this.props.user.location}</p>
	  			</div>
	  			<div id="schwifty">
	  				<h4>{this.props.user.dish} x {this.props.user.trays}</h4>
	  			</div>
	  			<div>
	  				<button className="ui blue button" onClick={this.showAddModal}>
						<i className="map icon"></i>Add to Map
					</button>
	  			</div>
         	<Modal show={this.state.show3} handleClose={this.hideAddModal}>
						<h2>Add the following pickup to your route:</h2>
						<p>{this.props.user.name}</p>
						<p>{this.props.user.location}</p>
						<p>{this.props.user.dish} x {this.props.user.trays}</p>
						<p>Distance From Location</p>
						<button className="ui blue button" id="addtomap" onClick={this.addPickup}>Add to Map</button>
         	</Modal>  			         
				</div>
   		</div>
   )
 }
}
function mapStateToProps(appState) {
	console.log('appstate', appState)
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(ManagePickupsList))