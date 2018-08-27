import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication } from '../Authentication'

import R_Login from './R_Login'
import R_Register from './R_Register'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	<Route path="/restaurant/donating" component={R_Donate} />
      	<Route path="/restaurauntlogin" component={R_Login} />
				<Route path="/restaurauntregister" component={R_Register} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp