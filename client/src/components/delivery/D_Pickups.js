import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { getDonations, updatePickup, getMyPickups } from '../../actions/donateActions'
import { connect } from 'react-redux'

import PickupsList from './D_PickupsList'

class D_Pickups extends Component {
	componentDidMount() {
		getMyPickups()
		updatePickup()
		console.log(this.props)
	}

	render() {
		return (
      <div>
      	{this.props.mypickups.map(user => (
        	<PickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
        ))}
				<div className="ui vertical segment">
					<h3>Home</h3>
					<p>{api.getProfile().name}</p>
					<p>{api.getProfile().location}</p>
				</div>
      </div> 
		)
	}
}

function mapStateToProps(appState) {
	console.log('appstate', appState)
	return {
		mypickups: appState.appReducer.mypickups
	}
}
export default withAuth(connect(mapStateToProps)(D_Pickups))