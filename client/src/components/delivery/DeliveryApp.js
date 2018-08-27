import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import D_Login from './D_Login'
import D_Register from './D_Register'
import D_Pickups from './D_Pickups'
import D_Home from './D_Home'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/deliverylogin'
        defaultRedirect='/'
      >
				<div>
          <Route exact path="/delivery" component={D_Login} />
          <Route path="/delivery/register" component={D_Register} />
          <Route path="/delivery/home" component={D_Home} />
          <Route path="/delivery/pickups" component={D_Pickups} />
          <Route path="/delivery/reports" component={D_Reports} />
          <Route path="/delivery/profile" component={D_Profile} />
        </div>
      </Authentication>
   	)
 	}
}

export default RestaurantApp