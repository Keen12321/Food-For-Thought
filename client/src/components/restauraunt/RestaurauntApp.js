import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >

				<Route path="requestpickup" component={RequestPickup} />
      	
      </Authentication>
   	)
 	}
}

export default RestaurauntApp