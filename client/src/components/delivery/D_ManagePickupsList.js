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
		show2: false,
		reason: '',
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

deletePickup = (e) => {
	e.preventDefault()
	updatePickup({
		accepted: "false",
		id: this.props.user.id,
		reason: this.state.reason
	})
	this.hideDeleteModal()
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
					<button className="ui red button" onClick={this.showDeleteModal}>
						<i className="trash alternate icon"></i>Delete
					</button>
	  			</div>
	  			         <Modal show={this.state.show3} handleClose={this.hideAddModal}>
	  						<h2>Add the following pickup to your route:</h2>
	  						<p>{this.props.user.name}</p>
	  						<p>{this.props.user.address}</p>
	  						<p>{this.props.user.dish} x {this.props.user.trays}</p>
	  						<p>Distance From Location</p>
	  						<button className="ui blue button" id="confirmpickup">Add to Map</button>
	  			         </Modal>
	  			         <Modal show={this.state.show2} handleClose={this.hideDeleteModal}>
	  						<h2>Are you sure you want to delete this pickup?</h2>
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
	console.log('appstate', appState)
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(D_ManagePickupsList))