import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { withAuth } from '../Authentication'


class D_Reports extends Component {
 render() {
   return (
   		<div>
   			Reports page goes here
   		</div>
     
   )
 }
}

export default withAuth(D_Reports)