import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class R_HomeBar extends Component {
   render() {
      return (
      	<div className="navbar">
      		<Link to="/restaurant"><i className="fa fa-cutlery"></i>Home</Link>
     		<Link to="/delivery/map"><i className="fa fa-map-marker"></i>Map</Link>
     		<Link to="/restaurant/profile">Restaurant<i className="fa fa-user"></i></Link>         
      	</div>
      )
   }
}

export default R_HomeBar