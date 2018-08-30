import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import {Authentication} from '../Authentication'
import Donate from './Donate'
import R_Home from './R_Home'
import R_Pickup from './R_Pickup'
import R_Reports from './R_Reports'
import R_Profile from './R_Profile'
import R_HomeBar from './R_HomeBar'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      ><R_HomeBar />
      <Switch>
        <Route path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donating" component={Donate} />
        <Route path="/restaurant/pickup" component={R_Pickup} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path="/restaurant/profile" component={R_Profile} />
      </Switch>
      </Authentication>
   	)
 	}
}

export default RestaurantApp