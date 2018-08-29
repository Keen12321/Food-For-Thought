import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class D_HomeBar extends Component {
 render() {
   return (
   	<div className="D_navbar">
   		<div className="D_navbar left">
   			<Link to="/delivery"><i className="fa fa-truck"></i>Home</Link>
   			<Link to="/delivery/map">Map</Link>
   			<Link to="/delivery/pickups">Pickups</Link>
   		</div>
   		<div className="D_navbar right">
   			<Link to="/delivery/profile">LV Rescue Mission<i className="fa fa-user"></i></Link>
   		</div>
   	</div>
     
   )
 }
}

export default D_HomeBar