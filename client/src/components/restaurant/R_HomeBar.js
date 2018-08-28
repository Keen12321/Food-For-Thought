import React, { Component } from 'react'

import {Link} from 'react-router-dom'

class R_HomeBar extends Component {
   render() {
      return (
         <div className="R_navbar">
            <div className="R_navbar left">
               <Link to="/restaurant/home"><i className="fa fa-cutlery"></i>Home</Link>
               <Link to="/restaurant/reports">Reports</Link>
            </div>
            <div className="R_navbar right">
               <Link to="/restaurant/profile">Restaurant<i className="fa fa-user"></i></Link>
            </div>
         </div>
      )
   }
}

export default R_HomeBar