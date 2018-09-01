import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import {Authentication} from '../Authentication'
import R_Home from './R_Home'
import R_donate from './R_donate'
import R_Reports from './R_Reports'
import ThankYou from './ThankYou'
import R_Profile from './R_Profile'
import R_HomeBar from './R_HomeBar'




class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/restaurant'
        defaultRedirect='/'
      >

        

      <R_HomeBar />
      <Switch>
        <Route exact path="/restaurant" component={R_Home} />
				<Route path="/restaurant/donate" component={R_donate} />
        <Route path="/restaurant/reports" component={R_Reports} />
        <Route path='/restaurant/thankyou' component={ThankYou} />
        <Route path="/restaurant/profile" component={R_Profile} />
      </Switch>

      </Authentication>
   	)
 	}
}

export default RestaurantApp