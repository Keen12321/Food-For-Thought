import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
import D_HomeBar from './D_HomeBar'


class D_Pickups extends Component {
 render() {
   return (
      <div>
         <D_HomeBar />
   		<div>
   			List of pickups goes here
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Pickups)