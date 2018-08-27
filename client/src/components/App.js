import React, { Component } from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import store from '../store'
import {BrowserRouter as Router, Route} from 'react-router-dom'
<<<<<<< HEAD
import {Provider} from 'react-redux'
=======
>>>>>>> 992697ab2527b9ed7ff84527120a66025dbaf842

import LandingPage from './LandingPage'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurantApp from './restaurant/RestaurantApp'

class App extends Component {
  render () {
    return (
    	<Provider store = {store}>
		  	<Router>
<<<<<<< HEAD
		  		<div className="mainContainer">
			  		<Route exactpath="/" component={LandingPage} />
			    	<Route path="/deliverylogin" component={DeliveryApp} />
			    	<Route path="/restaurauntLogin" component={RestaurauntApp} />
=======
		  		<div>
			  		<Route exact path="/" component={LandingPage} />
			    	<Route path="/delivery" component={DeliveryApp} />
			    	<Route path="/restaurant" component={RestaurantApp} />
>>>>>>> 992697ab2527b9ed7ff84527120a66025dbaf842
			    </div>
		  	</Router>
		  </Provider>
    )
  }
}

export default App
