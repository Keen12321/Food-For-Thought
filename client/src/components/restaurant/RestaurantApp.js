import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication } from '../Authentication'


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