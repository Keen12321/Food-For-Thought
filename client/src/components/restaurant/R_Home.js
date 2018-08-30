import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
import { Button } from 'semantic-ui-react'

import HomeBar from './R_HomeBar'

class R_Home extends Component {
   render() {
      return (
         <div>
            <HomeBar />
            <div className="pickupnotification">
               <h3>Pickup Ready</h3>
            </div>
            <div className="R_HomeContainer">
               <div>
                  <Link to="restaurant/donate"><Button color="green" type="submit" className="requestPickup">Donate Food</Button></Link>
               </div>
               <div>
                  <Link to="/restaurant/reports"><Button color="red" type="submit" className="manageReports">Manage Reports</Button></Link>
               </div>
               <div>
                  <Link to="/restaurant/profile"><Button color="blue" type="submit" className="manageProfile">Manage Profile</Button></Link>
               </div>
            </div>
         </div>
      )
   }
}

export default withAuth(R_Home)