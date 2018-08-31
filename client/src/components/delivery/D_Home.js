import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'

class D_Home extends Component {

  state = {
      id:api.getProfile().id
   }

  render() {
    return (
      <div>
        <div className="pickupnotification">
          <h3>Pickups available for today: ___</h3>
        </div>
   		<div className="D_HomeContainer">
   			<div>
   				<Link to="/delivery/map"><button type="submit" className="startPickup">Start Pickups</button></Link>
   			</div>
   			<div>
   				<Link to={`/delivery/reports/${this.state.id}`}><button type="submit" className="manageReports">Manage Reports</button></Link>
   			</div>
   			<div>
   				<Link to="/delivery/map"><button type="submit" className="navHome">Food Map</button></Link>
   			</div>
   		</div>
     	</div>
   )
 }
}

export default withAuth(D_Home)