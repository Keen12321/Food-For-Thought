import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import D_Pickups from './D_Pickups'
import { Authentication, AuthRoute } from '../Authentication'
import D_Home from './D_Home'
import D_Map from './D_Map'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'
import D_HomeBar from './D_HomeBar'

class DeliveryApp extends Component {
  render() {
    return (
      <div>
        <D_HomeBar />
        <Switch>
          <Route exact path="/delivery" component={D_Home} />
          <Route path="/delivery/pickups" component={D_Pickups} />
          <Route path="/delivery/reports" component={D_Reports} />
          <Route path="/delivery/profile" component={D_Profile} />
          <Route path="/delivery/map" component={D_Map} />
        </Switch>
      </div>
    )
  }
}

export default DeliveryApp

