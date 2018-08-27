import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
import D_HomeBar from './D_HomeBar'


class D_Home extends Component {
 render() {
   return (
   		<div>
   			<D_HomeBar />
            <div className="pickupnotification">
               <h3>There are 3 restaurants with food ready for pickup</h3>
            </div>
   		<div className="D_HomeContainer">
   			<div>
   				<Link to='/map'><button type="submit" className="startPickup">Start Pickups</button></Link>
   			</div>
   			<div>
   				<Link to='/pickups'><button type="submit" className="manageReports">Manage Pickups</button></Link>
   			</div>
   			<div>
   				<Link to='/map'><button type="submit" className="navHome">Navigate Home</button></Link>
   			</div>
   		</div>
     	</div>
   )
 }
}

export default withAuth(D_Home)