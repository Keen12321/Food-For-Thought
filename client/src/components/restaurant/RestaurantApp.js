import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Authentication } from '../Authentication'
import Oops from '../Oops'
import R_Home from './R_Home'
import Donate from './R_Donate'
import R_Reports from './R_Reports'
import ThankYou from './ThankYou'
import R_Profile from './R_Profile'
import HomeBar from './R_HomeBar'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/restaurant'
        defaultRedirect='/'
      >
        <HomeBar />
        <Switch>
          <Route exact path="/restaurant" component={R_Home} />
  				<Route path="/restaurant/donate" component={Donate} />
          <Route path="/restaurant/reports/:id" component={R_Reports} />
          <Route path='/restaurant/thankyou' component={ThankYou} />
          <Route path="/restaurant/profile" component={R_Profile} />
          <Route render={() => (<Oops />)} />
        </Switch>
      </Authentication>
   	)
 	}
}
export default RestaurantApp