import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
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
                  <Link to="/restaurant/pickup"><button type="submit" className="requestPickup">Request Pickup</button></Link>
               </div>
               <div>
                  <Link to="/restaurant/reports"><button type="submit" className="manageReports">Manage Reports</button></Link>
               </div>
               <div>
                  <Link to="/Rprofile"><button type="submit" className="manageProfile">Manage Profile</button></Link>
               </div>
            </div>
         </div>
      )
   }
}

export default withAuth(R_Home)