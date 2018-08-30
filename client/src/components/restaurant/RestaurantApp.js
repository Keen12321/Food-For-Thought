import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {Authentication} from '../Authentication'

import Homebar from './R_HomeBar'
import R_Home from './R_Home'
import R_Donate from './R_Donate'
import R_Reports from './R_Reports'
import ThankYou from './ThankYou'
import R_Profile from './R_Profile'


class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
        <Homebar />
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donate" component={R_Donate} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path='/restaurant/thankyou' component={ThankYou} />
        <Route path="/restaurant/profile" component={R_Profile} />
      </Authentication>
   	)
 	}
}

export default RestaurantApp