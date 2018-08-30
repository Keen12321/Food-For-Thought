import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'

import HomeBar from './D_HomeBar'

class D_Profile extends Component {
 render() {
   return (
      <div>
        
	   		<div>
	   			<Header>Delivery Profile</Header>
	   		</div>
      </div>
   )
 }
}

export default withAuth(D_Profile)