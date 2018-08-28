import React, { Component } from 'react'
import '../styles/App.css'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'
import store from '../store'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
// import RestaurantApp from './restaurant/RestaurauntApp'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import RestaurantProfile from './restaurant/RestaurantProfile'
class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<Route exact path="/" component={RestaurantProfile} />
		  	</Router>
		  </Provider>
    )
  }
}

export default App
