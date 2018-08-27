import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import { Authentication } from '../Authentication'

import R_Login from './R_Login'
import R_Register from './R_Register'
import Donate from './Donate'

class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/delivery'
        defaultRedirect='/'
      >
      	<Route exact path="/restauraunt/login" component={R_Login} />
				<Route path="/restauraunt/register" component={R_Register} />
				<Route path="/restaurant/donating" component={Donate} />
      </Authentication>
   	)
 	}
}

export default RestaurauntApp