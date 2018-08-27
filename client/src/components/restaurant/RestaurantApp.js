import React, { Component } from 'react'
import { Authentication, AuthRoute } from '../Authentication'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	<Route path="/restaurant/donating" component={R_Donate} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp