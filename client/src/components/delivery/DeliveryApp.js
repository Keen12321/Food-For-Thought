import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import D_Pickups from './D_Pickups'
import { Authentication } from '../Authentication'
import D_Home from './D_Home'
import HomeBar from './D_HomeBar'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'

class DeliveryApp extends Component {
  render() {
    return (
      <Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
        <HomeBar />
        <Route exact path="/delivery" component={D_Home} />
        <Route path="/delivery/pickups" component={D_Pickups} />
        <Route path="/delivery/reports" component={D_Reports} />
        <Route path="/delivery/profile" component={D_Profile} />
      </Authentication>
    )
  }
}

export default DeliveryApp