import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import { Authentication, AuthRoute } from './Authentication'
import store from './store'
import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurauntApp from './restauraunt/RestaurauntApp'



import RestaurantApp from './restaurant/RestaurantApp'


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
