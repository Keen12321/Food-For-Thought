import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Pickups extends Component {
 render() {
   return (
      <div>
         <HomeBar />
   		<div>
   			List of pickups goes here
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Pickups)