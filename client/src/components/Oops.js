import React, { Component } from 'react'
import '../styles/App.css'
import logo from '../assets/404.png'


class Oops extends Component {
 render() {
   return (
   		<div className="errorpage">
   		<img src={logo} />
   		</div>
     
   )
 }
}

export default Oops