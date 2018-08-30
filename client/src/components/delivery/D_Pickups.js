import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Pickups extends Component {
 render() {
   return (
      <div>
      <HomeBar />
   		<div>
   			Pickups List
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Pickups)