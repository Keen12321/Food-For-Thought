import React, { Component } from 'react'
import Authentication from '../Authentication'
class RestaurauntApp extends Component {
 	render() {
   	return (
 			<Authentication
        redirectUrl='/login'
        defaultRedirect='/'
      />
   	)
 	}
}

export default RestaurauntApp