import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {Authentication} from '../Authentication'

import Donate from './Donate'
import R_Home from './R_Home'
import R_Pickup from './R_Pickup'
import R_Reports from './R_Reports'
import RestaurantProfile from './RestaurantProfile'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donate" component={Donate} />
        <Route path="/restaurant/pickup" component={R_Pickup} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path="/restaurant/Rprofile" component={RestaurantProfile} />
      </Authentication>
   	)
 	}
}

export default RestaurantApp