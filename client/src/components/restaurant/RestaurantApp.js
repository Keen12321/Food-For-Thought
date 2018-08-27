import React, { Component } from 'react'
import { Authentication, AuthRoute } from '../Authentication'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	
      </Authentication>
   	)
 	}
}

export default RestaurauntApp