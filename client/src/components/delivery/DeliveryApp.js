import React, { Component } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { Authentication, AuthRoute } from '../Authentication'

import D_Login from './D_Login'
import D_Register from './D_Register'

class RestaurantApp extends Component {
 	render() {
   	return (
   			<div>
					<Route path="/delivery/login" component={D_Login} />
					<Route path="/delivery/register" component={D_Register} />
				</div>
   	)
 	}
}

export default RestaurantApp