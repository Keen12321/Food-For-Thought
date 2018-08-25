import React, { Component } from 'react'

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