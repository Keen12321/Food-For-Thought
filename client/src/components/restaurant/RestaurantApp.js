import React, { Component } from 'react'
import {Route} from 'react-router-dom'

import R_Login from './R_Login'
import R_Register from './R_Register'
import R_Home from './R_Home'
import R_Pickup from './R_Pickup'
import R_Reports from './R_Reports'
import R_Profile from './R_Profile'

class RestaurantApp extends Component {
 	render() {
   		return (
 			<div>
 				<Route path="/restaurant" component={R_Login} />
 				<Route path="/restaurant/register" component={R_Register} />
 				<Route path="/restaurant/home" component={R_Home} />
		        <Route path="/restaurant/pickup" component={R_Pickup} />
		        <Route path="/restaurant/reports" component={R_Reports} />
		        <Route path="/restaurant/profile" component={R_Profile} />
 			</div>
   		)
 	}
}

export default RestaurantApp