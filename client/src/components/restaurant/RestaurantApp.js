import React, { Component } from 'react'
import { Authentication, AuthRoute } from '../Authentication'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/restaurant'
        defaultRedirect='/'
      >
      </Authentication>
   	)
 	}
}

export default RestaurantApp