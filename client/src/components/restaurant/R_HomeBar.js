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

// https://github.com/Keen12321/Food-For-Thought/pull/34/conflict?name=client%252Fsrc%252Fcomponents%252Frestaurant%252FR_HomeBar.js&base_oid=d0985bc7f2dd4fb9c376451f6466db18bee5e194&head_oid=255fa1dc2799b9530093d4c5fdb79d895d83c6b4