import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'

import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurauntApp from './restauraunt/RestaurauntApp'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<div>
			  		<Route exact path="/" component={LandingPage} />
			    	<Route path="/delivery-login" component={DeliveryApp} />
			    	<Route path="/restauraunt-login" component={RestaurauntApp} />
			    </div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
