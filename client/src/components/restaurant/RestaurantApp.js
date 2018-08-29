import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import {Authentication} from '../Authentication'
import R_Home from './R_Home'
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
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donating" component={Donate} />
        
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path="/restaurant/profile" component={RestaurantProfile} />
      </Authentication>
   	)
 	}
}

export default RestaurantApp