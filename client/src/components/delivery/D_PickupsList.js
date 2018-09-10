import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updatePickup } from '../../actions/donateActions'
import { withAuth, api } from '../Authentication'
import {Button, Header, TextArea} from 'semantic-ui-react'


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

class PickupsList extends Component {
	state = {
		show: false,
		show1: false,
		show2: false,
		accepted: null,
		reason: '',
		pickup_by: '',
		id: '',
		results: []
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
		pickup_by: api.getProfile().name,
		delivery_id: api.getProfile().id
	})
	this.hidePickupModal()
	}
	deletePickup = (e) => {
	e.preventDefault()

	updatePickup({
		accepted: "false",
		id: this.props.user.id,
		reason: this.state.reason,
		pickup_by: api.getProfile().name,
		results: this.state.results,
		delivery_id: api.getProfile().id
	})
	this.hideDeleteModal()
	}
	componentDidMount() {
		console.log('this.props.user on pickupslist', this.props.user)
		console.log('this on pickupslist', this)
		console.log('this.state.results on pickupslist', this.state.results)
	}

 render() {

   return (
   		<div id="lubba">
         	<div key={this.props.user.id} className="pickups ui vertical segment" id='lubba2'>
	   			<div id="morty">
		   			<div>
		  				<Header as='h3' content={this.props.user.name} />
		  				<p>{this.props.user.location}</p>
		  			</div>
		  			<div className="dubdub">
		  				<Header as='h4' content={`${this.props.user.dish} x ${this.props.user.trays}`} />
		  			</div>
	  			</div>
	  			<div>
	  				<a href={'tel:1+'+`${this.props.user.phone}`}><i className="fa fa-phone fa-2x"></i></a>
	  				<a href={'sms:1+'+`${this.props.user.phone}`}><i className="fa fa-comment fa-2x"></i></a>
	  			</div>
	  			<div id="rick">
	  				<Button color='green' icon='check' id='shadow' content='Confirm Pickup' onClick={this.showPickupModal} />
					<Button color='red' icon='trash' id='shadow' content='Delete' onClick={this.showDeleteModal} />
	  			</div>
  			         <Modal show={this.state.show1} handleClose={this.hidePickupModal}>
  						<Header as='h2' content="Please confirm that you have picked up the following:" />
  						<p>{this.props.user.name}</p>
  						<p id="waypoints">{this.props.user.location}</p>
  						<p>{this.props.user.dish} x {this.props.user.trays}</p>
  						<Button color='green' icon='check' content='Confirm Pickup'onClick={this.addPickup} id="shadow" />
  			         </Modal>
  			         <Modal show={this.state.show2} handleClose={this.hideDeleteModal}>
  						<Header as='h2' id='title' content='Are you sure you want to delete this pickup?' />
  						<p>{this.props.user.name}</p>
  						<p>{this.props.user.dish} x {this.props.user.trays}</p>
  						<div className="cxlreason">
  							<TextArea name="reason" type="text" value={this.state.reason} onChange={this.handleChange} placeholder="Provide a reason for cancellation">
  							</TextArea>
  						</div>
  						<Button color='red' icon='cancel' id="shadow" content='Delete Pickup' onSubmit={this.handleSubmit} onClick={this.deletePickup} />
  			         </Modal>
			</div>
   		</div>
	   )
	 }
	}

function mapStateToProps(appState) {
	return {
		mypickups: appState.appReducer.mypickups,
		addresses: appState.appReducer.addresses
	}
}
export default withAuth(connect(mapStateToProps)(PickupsList))