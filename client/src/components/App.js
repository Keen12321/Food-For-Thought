import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'

import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurauntApp from './restauraunt/RestaurauntApp'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
		  		<div className="mainContainer">
			  		<Route exactpath="/" component={LandingPage} />
			    	<Route path="/deliverylogin" component={DeliveryApp} />
			    	<Route path="/restaurauntLogin" component={RestaurauntApp} />
			    </div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
