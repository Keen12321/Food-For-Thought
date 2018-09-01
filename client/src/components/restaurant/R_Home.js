import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { withAuth, api } from '../Authentication'
import { Container, Button, Header } from 'semantic-ui-react'

class R_Home extends Component {
  state = {
    id:api.getProfile().id
  }

  render() {
    return (
      <Container fluid>

        <Container className="pickupnotification">
           <Header as='h3'>Pickup Ready</Header>
        </Container>

        <div className="R_HomeContainer">
           <div>
              <Link to="restaurant/donate">
                 <Button color="green" type="submit" className="requestPickup">Donate Food</Button>
              </Link>
           </div>
           <div>

              <Link to={`/restaurant/reports/${this.state.id}`}>
                 <Button color="red" type="submit" className="manageReports">Manage Reports</Button>
              </Link>

           </div>
           <div>
              <Link to="/restaurant/profile">
                 <Button color="blue" type="submit" className="manageProfile">Manage Profile</Button>
              </Link>
           </div>
        </div>
        
      </Container>
    )
  }
}

export default withAuth(R_Home)
