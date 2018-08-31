import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication } from '../Authentication'

import HomeBar from './D_HomeBar'
import D_Pickups from './D_Pickups'
import D_Home from './D_Home'
import D_Map from './D_Map'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'

class DeliveryApp extends Component {
  render() {
    return (
      <Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
        <HomeBar />
        <Route exact path="/delivery" component={D_Home} />
        <Route path="/delivery/pickups" component={D_Pickups} />
        <Route path="/delivery/reports" component={D_Reports} />
        <Route path="/delivery/profile" component={D_Profile} />
        <Route path="/delivery/map" component={D_Map} />
      </Authentication>
    )
  }
}

export default DeliveryApp
