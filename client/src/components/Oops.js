import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'
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