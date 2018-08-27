import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurantApp from './restaurant/RestaurantApp'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<div>
			  		<Route exact path="/" component={LandingPage} />
			    	<Route path="/delivery" component={DeliveryApp} />
			    	<Route path="/restaurant" component={RestaurantApp} />
			    </div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
