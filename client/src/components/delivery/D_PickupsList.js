import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePickup } from '../../actions/donateActions'
import { withAuth, api } from '../Authentication'

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

class D_PickupsList extends Component {
	state = {
		show: false,
		show1: false,
		show2: false,
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
	showPickupModal = () => {
		this.setState({
			show1: true
		})
	}
	hidePickupModal = () => {
		this.setState({
			show1: false
		})
	}
	showDeleteModal = () => {
		this.setState({
			show2: true
		})
	}
	hideDeleteModal = () => {
		this.setState({
			show2: false
		})
	}
	addPickup = () => {
	updatePickup({
		accepted: "true",
		id: this.props.user.id,
		pickup_by: api.getProfile().email
	})
	this.hidePickupModal()
	}
	deletePickup = (e) => {
	e.preventDefault()

	updatePickup({
		accepted: "false",
		id: this.props.user.id,
		reason: this.state.reason,
		pickup_by: api.getProfile().email,
		delivery_id: api.getProfile().id
	})
	
	this.hideDeleteModal()
	}

 render() {

   return (
   		<div>
         	<div key={this.props.user.id} className="pickups ui vertical segment">
	   			<div>
	  				<h3>{this.props.user.name}</h3>
	  				<p>{this.props.user.location}</p>
	  			</div>
	  			<div>
	  				<h4>{this.props.user.dish} x {this.props.user.trays}</h4>
	  			</div>
	  			<div>
	  				<button className="ui green button" onClick={this.showPickupModal}>
						<i className="check icon"></i>Confirm Pickup
						</button>
						<button className="ui red button" onClick={this.showDeleteModal}>
							<i className="trash alternate icon"></i>Delete
						</button>
	  			</div>
  			         <Modal show={this.state.show1} handleClose={this.hidePickupModal}>
  						<h2>Please confirm that you have picked up the following:</h2>
  						<p>{this.props.user.name}</p>
  						<p id="waypoints">{this.props.user.location}</p>
  						<p>{this.props.user.dish} x {this.props.user.trays}</p>
  						<button className="ui green button" onClick={this.addPickup} id="confirmpickup">Confirm Pickup</button>
  			         </Modal>
  			         <Modal show={this.state.show2} handleClose={this.hideDeleteModal}>
  						<h2 id='title'>Are you sure you want to delete this pickup?</h2>
  						<p>{this.props.user.name}</p>
  						<p>{this.props.user.dish} x {this.props.user.trays}</p>
  						<div className="cxlreason">
  							<textarea name="reason" type="text" value={this.state.reason} onChange={this.handleChange} placeholder="Must provide reason for cancellation">
  							</textarea>
  						</div>
  						<button className="ui red button" id="confirmcxl" onSubmit={this.handleSubmit} onClick={this.deletePickup}>Delete Pickup</button>
  			         </Modal>
				</div>
	   		</div>
		   )
		 }
		}

function mapStateToProps(appState) {
	return {
		mypickups: appState.appReducer.mypickups
	}
}
export default withAuth(connect(mapStateToProps)(D_PickupsList))