import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

<<<<<<< HEAD
class RestaurantApp extends Component {
=======
import R_Login from './R_Login'
import R_Register from './R_Register'

class RestaurauntApp extends Component {
>>>>>>> 540c71e97c7cd054340458ba8e08a3a760cb12fb
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	<Route path="/restaurauntlogin" component={R_Login} />
				<Route path="/restaurauntregister" component={R_Register} />
      </Authentication>
   	)
 	}
}

export default RestaurantApp