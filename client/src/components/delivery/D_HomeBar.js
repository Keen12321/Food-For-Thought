import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class D_HomeBar extends Component {
 render() {
   return (
   	<div className="D_homebar">
   		<i className='fa fa-truck fa-2x'></i><Link to='/deliveryhome'>Home</Link>
   	</div>
     
   )
 }
}

export default D_HomeBar