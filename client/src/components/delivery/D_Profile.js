import React, { Component } from 'react'
import { withAuth } from '../Authentication'

class D_Profile extends Component {
 render() {
   return (
      <div>

   		<div>
   			Delivery Profile
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Profile)