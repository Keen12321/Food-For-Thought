import React, { Component } from 'react'
import '../styles/App.css'
import error from '../assets/404.png'


class Oops extends Component {
 render() {
   return (
   		<div className="errorpage">
   		<img src={error} alt=""/>
   		</div>
     
   )
 }
}

export default Oops