import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Pickups extends Component {
	state = {
		show: false
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
 render() {
   return (
      <div>
         <HomeBar />
         <Modal show={this.state.show1} handleClose={this.hidePickupModal}>
			<h2>Please confirm this pickup and add it to the map</h2>
			<p>Restaurant Name</p>
			<p>Restaurant Address</p>
			<p>Distance From Location</p>
			<button className="ui grey button">I don't work</button>
         </Modal>
         <Modal show={this.state.show2} handleClose={this.hideDeleteModal}>
			<h2>Are you sure you want to delete this pickup?</h2>
			<p>Restaurant Name</p>
			<p>Restaurant Address</p>
			<p>Distance From Location</p>
			<div className="cxlreason">
				<textarea placeholder="Must provide reason for cancellation">
				</textarea>
			</div>
			<button className="ui grey button">I don't work</button>
         </Modal>
   		<div className="pickups ui vertical segment">
   			<div>
  				<p>Restaurant Name</p>
  				<p>Restaurant Address</p>
  				<p>Distance From Location</p>
  			</div>
  			<div>
  				<p>__ Main Trays</p>
  				<p>__ Side Trays</p>
  			</div>
  			<div>
  				<button className="ui green button" onClick={this.showPickupModal}>
					<i className="map pin icon"></i>Add to Map
				</button>
				<button className="ui red button" onClick={this.showDeleteModal}>
					<i className="trash alternate icon"></i>Delete
				</button>
  			</div>
		</div>
		<div className="ui vertical segment">
  			<p>I'm here just to show how these divs are separated.
  				Delete me when this page is dynamic</p>
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
export default withAuth(D_Pickups)