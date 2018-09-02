import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { getDonations, updatePickup } from '../../actions/donateActions'
import {connect} from 'react-redux'
import D_ManagePickupsList from './D_ManagePickupsList'

class D_ManagePickups extends Component {


	componentDidMount() {
		getDonations()
		updatePickup()
		console.log(this.props)
	}

 render() {
   return (
      <div className="reversepickups">
      	{this.props.donate.map(user => (
        	<D_ManagePickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
        ))}
   		
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
export default withAuth(connect(mapStateToProps)(D_ManagePickups))