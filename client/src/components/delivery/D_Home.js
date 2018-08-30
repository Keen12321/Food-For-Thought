import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth } from '../Authentication'
import { Header, Button } from 'semantic-ui-react'

class D_Home extends Component {
 render() {
   return (
   		<div>
        <div className="pickupnotification">
           <Header as='h3'>There are 3 restaurants with food ready for pickup</Header>
        </div>
     		<div className="D_HomeContainer">
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='green' type="submit" className="startPickup">Start Pickups</Button>
            </Link>
     			</div>
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='red' type="submit" className="manageReports">Manage Pickups</Button>
            </Link>
     			</div>
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='blue' type="submit" className="navHome">Navigate Home</Button>
            </Link>
     			</div>
     		</div>
     	</div>
   )
 }
}

export default withAuth(D_Home)