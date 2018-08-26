import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import DonateContainer from './donating/DonateContainer'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
				<Route path="/donate" component={DonateContainer} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp