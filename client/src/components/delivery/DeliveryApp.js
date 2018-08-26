import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import D_Login from './D_Login'

class DeliveryApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/deliverylogin'
        defaultRedirect='/'
      >
				<Route path="/deliverylogin" component={D_Login} />
      </Authentication>
   	)
 	}
}

export default DeliveryApp