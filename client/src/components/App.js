import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'
import store from '../store'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurantApp from './restaurant/RestaurantApp'
import RestaurantProfile from './restaurant/RestaurantProfile'


class App extends Component {
  render () {
    return (
    	<div>
    		<RestaurantProfile/>
    	</div>
    )
  }
}

export default App
