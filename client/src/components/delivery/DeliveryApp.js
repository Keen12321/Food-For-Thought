import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import D_Login from './D_Login'
import D_Pickups from './D_Pickups'
import D_Home from './D_Home'
import D_Reports from './D_Reports'
import D_Profile from './D_Profile'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/deliverylogin'
        defaultRedirect='/'
      >
				<Route path="/deliverylogin" component={D_Login} />
				<Route path="/deliveryhome" component={D_Home} />
				<Route path="/pickups" component={D_Pickups} />
				<Route path="/deliveryreports" component={D_Reports} />
				<Route path="/deliveryprofile" component={D_Profile} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp