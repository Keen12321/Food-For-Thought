import React, { Component } from 'react'
import { Authentication } from '../Authentication'

class RestaurantApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	
      </Authentication>
   	)
 	}
}

export default RestaurantApp