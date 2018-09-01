import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withAuth, api } from '../Authentication'
import { Header, Button } from 'semantic-ui-react'

class D_Home extends Component {
  state = {
    id: api.getProfile().id
  }

  render() {
    return (
      <div>
        <div className="pickupnotification">
           <Header as='h3'>Pickups available for today: ___</Header>
        </div>
     		<div className="D_HomeContainer">
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='green' type="submit" className="startPickup">Start Pickups</Button>
            </Link>
     			</div>
     			<div>
     				<Link to={`/delivery/reports/${this.state.id}`}>
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
