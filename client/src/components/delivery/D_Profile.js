import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'


class D_Profile extends Component {
 render() {
   return (
   		<div>
   			Delivery profile goes here
   		</div>
     
   )
 }
}

export default withAuth(D_Profile)