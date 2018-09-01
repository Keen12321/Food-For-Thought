import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import { Authentication } from '../Authentication'

import D_ManagePickups from './D_ManagePickups'
import D_Home from './D_Home'
import D_Pickups from './D_Pickups'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'
import D_Map from './D_Map'
import HomeBar from './D_HomeBar'

class DeliveryApp extends Component {
  render() {
    return (
      <Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
        <div>
          <HomeBar />
          <Route exact path="/delivery" component={D_Home} />
          <Route path="/delivery/pickups" component={D_ManagePickups} />
          <Route path="/delivery/reports/:id" component={D_Reports} />
          <Route path="/delivery/profile" component={D_Profile} />
          <Route path="/delivery/map" component={D_Map} />
        </div>
      </Authentication>
    )
  }
}

export default DeliveryApp