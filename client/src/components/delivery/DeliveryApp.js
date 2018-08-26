import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import D_Login from './D_Login'
import D_Register from './D_Register'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/deliverylogin'
        defaultRedirect='/'
      >
				<Route exact path="/deliverylogin" component={D_Login} />
				<Route path="/deliveryregister" component={D_Register} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp