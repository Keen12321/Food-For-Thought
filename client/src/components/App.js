import React, { Component } from 'react'
import '../styles/App.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurauntApp from './restauraunt/RestaurauntApp'
import D_Map from './delivery/D_Map'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<div>
			  		<Route exact path="/" component={LandingPage} />
			    	<Route exact path="/deliveryLogin" component={DeliveryApp} />
			    	<Route exact path="/restaurauntLogin" component={RestaurauntApp} />
			    	<D_Map />
			    </div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
