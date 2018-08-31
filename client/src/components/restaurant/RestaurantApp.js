import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { Authentication } from '../Authentication'

import R_Home from './R_Home'
import HomeBar from './R_HomeBar'
import Donate from './Donate'
import R_Reports from './R_Reports'
import RestaurantProfile from './RestaurantProfile'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
        <HomeBar />
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donate" component={Donate} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path="/restaurant/profile" component={RestaurantProfile} />
      </Authentication>
   	)
 	}
}

export default RestaurantApp