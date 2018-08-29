import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class D_HomeBar extends Component {
 render() {
   return (
   	<div className="D_navbar">
   			<Link to="/delivery/home"><i className="fa fa-truck"></i>Home</Link>
   			<Link to="/delivery/map"><i className="fa fa-map-marker"></i>Map</Link>
   			<Link to="/delivery/pickups"><i class="fa fa-list-ul"></i>Pickups</Link>
   			<Link to="/delivery/profile"><i className="fa fa-user"></i>LV Rescue Mission</Link>
   	</div>
     
   )
 }
}

export default D_HomeBar