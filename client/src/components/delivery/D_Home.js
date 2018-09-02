import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {connect} from 'react-redux'
import { getDonations } from '../../actions/donateActions'


class D_Home extends Component {

  state = {
      id:api.getProfile().id
   }

   componentDidMount() {
    getDonations()
   }

  render() {
    return (
      <div>
        <div className="pickupnotification">
          <h3>Pickups available for today: {this.props.donate.length}</h3>
        </div>
     		<div className="D_HomeContainer">
     			<div>
     				<Link to="/delivery/map"><button type="submit" className="startPickup wubba">My Pickups Map</button></Link>
     			</div>
     			<div>
     				<Link to={`/delivery/reports/${this.state.id}`}><button type="submit" className="manageReports wubba">Manage Reports</button></Link>
     			</div>
     			<div>
     				<Link to="/delivery/pickups"><button type="submit" className="navHome wubba">View All Available Pickups</button></Link>
     			</div>
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
export default withAuth(connect(mapStateToProps)(D_Home))