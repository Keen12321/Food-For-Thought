import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import D_HomeBar from './D_HomeBar'


class D_Reports extends Component {
 render() {
   return (
      <div>
         <D_HomeBar />
   		<div>
   			Reports page goes here
   		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Reports)