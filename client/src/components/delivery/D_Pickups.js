import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'


class D_Pickups extends Component {
 render() {
   return (
   		<div>
   			List of pickups goes here
   		</div>
     
   )
 }
}

export default withAuth(D_Pickups)