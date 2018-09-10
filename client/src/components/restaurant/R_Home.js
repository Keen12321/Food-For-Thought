import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {Segment, Button, Header} from 'semantic-ui-react'

class R_Home extends Component {
  state = {
    id:api.getProfile().id
  }

   render() {
      return (
         <div>
            <div className="pickupnotification">
               <Header as='h1'>Pickup Ready</Header>
            </div>
            <Segment className="R_HomeContainer" basic>
               <div>
                  <Link to="/restaurant/donate">
                     <Button type="submit" color='green' size='huge' id='shadow' fluid content="Donate Food" />
                  </Link>
               </div>
               <div>
                  <Link to={`/restaurant/reports/${this.state.id}`}>
                     <Button type="submit" color='orange' size='huge' id="shadow" fluid content="Manage Reports" />
                  </Link>
               </div>
            </Segment>
         </div>
      )
   }
}

export default withAuth(R_Home)
