import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class R_HomeBar extends Component {
   render() {
      return (

      	<div className="D_navbar">
     			<Link to='/restaurant'><i className='fa fa-cutlery'></i>Home</Link>
     			<Link to='/restuarant/deliverymap'><i className="fa fa-map-marker"></i>Map</Link>
     			<Link to='/restaurant/Rprofile'><i className='fa fa-user'></i>Restaurant</Link>         
      	</div>
      )
   }
}

export default R_HomeBar

