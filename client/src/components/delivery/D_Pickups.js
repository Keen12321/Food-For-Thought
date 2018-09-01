import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { connect } from 'react-redux'
import { getDonations, updatePickup } from '../../actions/donateActions.js'
import { Container, Header, Grid, Button } from 'semantic-ui-react'

import D_PickupsList from './D_PickupsList'

class D_Pickups extends Component {
	state = {
		show: false
	}

	componentDidMount() {
		getDonations()
	}

	showPickupModal = () => {
		this.setState({
			show1: true
		})
	}

	componentDidMount() {
		getDonations()
		updatePickup()
		console.log(this.props)
	}

	hideDeleteModal = () => {
		this.setState({
			show2: false
		})
	}

	render() {
		return (
			<Container>
				<Header>Pickups List</Header>

				<Grid>	
					{this.props.donations.map( data => (
						<div key={data.id}>
							<Grid.Row>
								<Grid.Column>
									{data.dish}
									{data.address}
									{data.date}
								</Grid.Column>
								<Button color='green' type='submit'>Accept</Button>
								<Button color='red' type='submit'>Decline</Button>
							</Grid.Row>
						</div>
					))}
				</Grid>

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
						<textarea placeholder="Must provide reason for cancellation"/>
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

				<div>
	      	{this.props.donate.map(user => (
	        	<D_PickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
	        ))}
	   		
					<div className="ui vertical segment">
						<h3>Home</h3>
						<p>{api.getProfile().name}</p>
						<p>{api.getProfile().address}</p>
					</div>
	      </div> 
      </Container>    
   	)
 	}
}

const Modal = ({ handleClose, show, children }) => {
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
		donate: appState.appReduce.donate
	}
}

export default withAuth( connect(mapStateToProps)(D_Pickups) )
