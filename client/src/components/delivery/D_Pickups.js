import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { getDonations } from '../../actions/donateActions'
import {connect} from 'react-redux'



class D_Pickups extends Component {
	state = {
		show: false,
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

	componentDidMount() {
		getDonations()
	}

 render() {
   return (
      <div>
         <Modal show={this.state.show1} handleClose={this.hidePickupModal}>
			<h2>Please confirm this pickup and add it to the map</h2>
			<p>Restaurant Name</p>
			<p>Restaurant Address</p>
			<p>Food Item x ___</p>
			<p>Distance From Location</p>
			<button className="ui grey button">I don't work</button>
         </Modal>
         <Modal show={this.state.show2} handleClose={this.hideDeleteModal}>
			<h2>Are you sure you want to delete this pickup?</h2>
			<p>Restaurant Name</p>
			<p>Food Item x ___</p>
			<div className="cxlreason">
				<textarea placeholder="Must provide reason for cancellation">
				</textarea>
			</div>
			<button className="ui grey button">I don't work</button>
         </Modal>
         {this.props.donate.map(user => (
         	<div className="pickups ui vertical segment">
	   			<div>
	  				<p>{user.dish}</p>
	  				<p>{user.dish}</p>
	  				<p>Distance From Location</p>
	  			</div>
	  			<div>
	  				<p>{user.dish} x {user.trays}</p>
	  			</div>
	  			<div>
	  				<button className="ui green button" onClick={this.showPickupModal}>
						<i className="map pin icon"></i>Confirm Receipt
					</button>
	  				<button className="ui blue button" onClick={this.showPickupModal}>
						<i className="map pin icon"></i>Add to Map
					</button>
					<button className="ui red button" onClick={this.showDeleteModal}>
						<i className="trash alternate icon"></i>Delete
					</button>
	  			</div>
			</div>
		))}
   		
		<div className="ui vertical segment">
  			<h3>Home</h3>
  			<p>{api.getProfile().email}</p>
  			<p>{api.getProfile().address}</p>
		</div>
      </div> 

   )
 }
}

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

function mapStateToProps(appState) {
	console.log('appstate', appState)
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(D_Pickups))