import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import D_Pickups from './D_Pickups'
// import { Authentication, AuthRoute } from '../Authentication'
import D_Home from './D_Home'
// import D_Map from './D_Map'
import D_Profile from './D_Profile'

class DeliveryApp extends Component {
  render() {
    return (
      <div>
        <Route exact path="/delivery" component={D_Home} />
        <Route path="/delivery/pickups" component={D_Pickups} />
        <Route path="/delivery/profile" component={D_Profile} />
      </div>
    )
  }
}

export default DeliveryApp