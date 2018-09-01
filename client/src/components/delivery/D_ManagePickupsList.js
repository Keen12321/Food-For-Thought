import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import {connect} from 'react-redux'
import { getDonations, updatePickup } from '../../actions/donateActions'
import {Form} from 'semantic-ui-react'


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

class D_ManagePickupsList extends Component {
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
		pickup_by: api.getProfile().email
	})
	this.hideAddModal()
}


 render() {
   return (
   		<div>
         	<div key={this.props.user.id} className="pickups ui vertical segment">
	   			<div>
	  				<p>{this.props.user.name}</p>
	  				<p>{this.props.user.address}</p>
	  				<p>Distance From Location</p>
	  			</div>
	  			<div>
	  				<p>{this.props.user.dish} x {this.props.user.trays}</p>
	  			</div>
	  			<div>
	  				<button className="ui blue button" onClick={this.showAddModal}>
						<i className="map icon"></i>Add to Map
					</button>
					
	  			</div>
	  			         <Modal show={this.state.show3} handleClose={this.hideAddModal}>
	  						<h2>Add the following pickup to your route:</h2>
	  						<p>{this.props.user.name}</p>
	  						<p>{this.props.user.address}</p>
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
export default withAuth(connect(mapStateToProps)(D_ManagePickupsList))