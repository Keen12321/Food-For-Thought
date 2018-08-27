import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Profile extends Component {
 render() {
   return (
      <div>
         <HomeBar />
   		<div>
   			Delivery profile goes here
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Profile)