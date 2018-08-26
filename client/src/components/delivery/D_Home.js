import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
import D_HomeBar from './D_HomeBar'


class D_Home extends Component {
 render() {
   return (
   		<div>
   			<D_HomeBar />
   		<div className="D_HomeContainer">
   			<div>
   				<Link to='/pickups'><button type="submit" className="startPickup">Start Pickups</button></Link>
   			</div>
   			<div>
   				<Link to='/deliveryreports/'><button type="submit" className="manageReports">Manage Reports</button></Link>
   			</div>
   			<div>
   				<Link to='/deliveryprofile/'><button type="submit" className="manageProfile">Manage Profile</button></Link>
   			</div>
   		</div>
     	</div>
   )
 }
}

export default withAuth(D_Home)