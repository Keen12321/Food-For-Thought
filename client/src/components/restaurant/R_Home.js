import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {Container, Button, Header} from 'semantic-ui-react'

class R_Home extends Component {
  state = {
    id:api.getProfile().id
  }

  render() {
    return (
      <Container text>
        <Container className="pickupnotification">
           <Header as='h3'>Pickup Ready</Header>
        </Container>

        <Container className="R_HomeContainer">

          <Link to="/restaurant/donate">
             <Button type="submit" 
              color='green'
              className="requestPickup">Donate Food</Button>
          </Link>
       
          <Link to={`/restaurant/reports/${this.state.id}`}>
             <Button type="submit" 
              color='orange'
              className="manageReports">Manage Reports</Button>
          </Link>
       
          <Link to="/restaurant/profile">
            <Button type="submit" 
              color='red'
              className="manageProfile">Manage Profile</Button>
          </Link>
           
        </Container>
      </Container>
    )
  }
}

export default withAuth(R_Home)
