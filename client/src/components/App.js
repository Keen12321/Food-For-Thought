import React, { Component } from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'
import store from '../store'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import R_Home from './restaurant/R_Home'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantProfile from './restaurant/RestaurantProfile'
import Donate from './restaurant/Donate'
class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<div>
		  			<Route exact path = '/' component={R_Home} />
			  		<Route exact path='/Rprofile' component={RestaurantProfile} />
			  		<Route exact path = '/donate' component={Donate} />
		  		</div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
