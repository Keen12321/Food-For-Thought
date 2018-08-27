import React, { Component } from 'react'

class R_HomeBar extends Component {
 render() {
   return (
   	<div className="D_navbar">
   		<div className="D_navbar left">
   			<Link to='/deliveryhome'><i className='fa fa-cutlery'></i>Home</Link>
   			<Link to='/deliverymap'>Map</Link>
   		</div>
   		<div className="D_navbar right">
   			<Link to='/deliveryprofile'>Restaurant<i className='fa fa-user'></i></Link>
   		</div>
   	</div>
     
   )
 }
}

export default R_HomeBar