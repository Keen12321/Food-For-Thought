import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication } from '../Authentication'

import DonateDetails from './donating/DonateDetails'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/restaurant-login'
        defaultRedirect='/'
      >
				<Route path="/donating" component={DonateDetails} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp