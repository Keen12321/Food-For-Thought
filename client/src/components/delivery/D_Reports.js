import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Reports extends Component {
 render() {
   return (
      <div>
         <HomeBar />
   		<div>
   			Reports Page
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Reports)