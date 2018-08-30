import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'


class D_Home extends Component {
 render() {
   return (
   		<div>
        <div className="pickupnotification">
          <h3>Pickups available for today: ___</h3>
        </div>
   		<div className="D_HomeContainer">
   			<div>
   				<Link to="/delivery/pickups"><button type="submit" className="startPickup">Start Pickups</button></Link>
   			</div>
   			<div>
   				<Link to="/delivery/pickups"><button type="submit" className="manageReports">Manage Pickups</button></Link>
   			</div>
   			<div>
   				<Link to="/delivery/pickups"><button type="submit" className="navHome">Navigate Home</button></Link>
   			</div>
   		</div>
     	</div>
   )
 }
}

export default withAuth(D_Home)