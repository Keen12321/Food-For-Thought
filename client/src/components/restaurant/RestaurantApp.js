import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {Authentication} from '../Authentication'
import R_Home from './R_Home'
import R_Donate from './R_Donate'
import R_Reports from './R_Reports'
import R_HomeBar from './R_HomeBar'
import RestaurantProfile from './RestaurantProfile'


class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      >
      <R_HomeBar />
      <Switch>
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donate" component={R_Donate} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path="/restaurant/Rprofile" component={RestaurantProfile} />
      </Switch>
      </Authentication>
   	)
 	}
}

export default RestaurantApp