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
         <div>
            <div className="pickupnotification">
               <h3>Pickup Ready</h3>
            </div>

            <div className="R_HomeContainer">
               <div>
                  <Link to="/restaurant/donate"><button type="submit" className="requestPickup">Donate Food</button></Link>
               </div>
               <div>
                  <Link to={`/restaurant/reports/${this.state.id}`}><button type="submit" className="manageReports">Manage Reports</button></Link>
               </div>
               <div>
                  <Link to="/restaurant/profile"><button type="submit" className="manageProfile">Manage Profile</button></Link>
               </div>
            </div>
         </div>
      )
   }
}

export default withAuth(R_Home)