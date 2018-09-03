import React, { Component } from 'react'
import '../styles/App.css'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'


class Oops extends Component {
 render() {
   return (
   		<div className="errorpage">
   			<span className="dubdub">404</span>
   			<span className="schwifty">It ain't here!</span>
   		</div>
     
   )
 }
}

export default Oops