import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class D_HomeBar extends Component {
   render() {
      return (
         <div className="navbar">
            <Link to="/delivery"><i className="fa fa-truck"></i>Home</Link>
            <Link to="/delivery/map"><i className="fa fa-map-marker"></i>Map</Link>
            <Link to="/delivery/pickups"><i className="fa fa-map-marker"></i>Pickups</Link>
   		 <Link to="/delivery/profile">LV Rescue Mission<i className="fa fa-user"></i></Link>
   	  </div>
      )
   }
}

export default D_HomeBar