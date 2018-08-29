import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class R_HomeBar extends Component {
   render() {
      return (
      	<div className="D_navbar">
     			<Link to='/'><i className='fa-nav fa fa-cutlery'></i>Home</Link>
     			<Link to='/deliverymap'><i className="fa-nav fa fa-map-marker"></i>Map</Link>
     			<Link to='/restaurant/profile'><i className='fa-nav fa fa-user'></i>Restaurant</Link>         
      	</div>
      )
   }
}

export default R_HomeBar