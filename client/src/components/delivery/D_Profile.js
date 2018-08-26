import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'
import D_HomeBar from './D_HomeBar'


class D_Profile extends Component {
 render() {
   return (
      <div>
         <D_HomeBar />
   		<div>
   			Delivery profile goes here
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Profile)