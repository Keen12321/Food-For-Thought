import React, { Component } from 'react'
import { withAuth, api } from '../Authentication'
import { getDonations, updatePickup } from '../../actions/donateActions'
import {connect} from 'react-redux'
import D_PickupsList from './D_PickupsList'

class D_Pickups extends Component {


	componentDidMount() {
		getDonations()
		updatePickup()
		console.log(this.props)
	}

 render() {
   return (
      <div>
      	{this.props.donate.map(user => (
        	<D_PickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
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




function mapStateToProps(appState) {
	console.log('appstate', appState)
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(D_Pickups))