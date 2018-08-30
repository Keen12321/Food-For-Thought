import React from 'react'
import '../styles/App.css'
import '../styles/Login.css'
import store from '../store'
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import { Authentication, AuthRoute } from './Authentication'
import Donate from './restaurant/Donate'
import Login from './Login'
import Register from './Register'
import DeliveryApp from './delivery/DeliveryApp'
import RestaurantApp from './restaurant/RestaurantApp'

const App = props => (
  <Provider store = {store}>
  	<Router>
			<Authentication
    		redirectUrl='/'
    		defaultRedirect='/'
  		>
	  		<div className="mainContainer">
	  			<Route exact path="/" render={() => (
         		<Redirect to="/login" />
        	)} />
	  			<Route exact path="/login" component={Login} />
	  			<Route path="/register" component={Register} />
		    	<AuthRoute path="/delivery" component={DeliveryApp} />
		    	<AuthRoute path="/restaurant" component={RestaurantApp} />
		    </div>
	    </Authentication>
  	</Router>
  </Provider>
)

export default App
