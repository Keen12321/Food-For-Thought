import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import DonateDetails from './donating/DonateDetails'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
				<Route path="/donating" component={DonateDetails} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp