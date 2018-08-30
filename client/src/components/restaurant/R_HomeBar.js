import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Container, Icon } from 'semantic-ui-react'

class R_HomeBar extends Component {
   render() {
      return (
      	<div className="navbar">
      		<Link to="/restaurant">
      			<Icon.Group size='large'>
      				<Icon size='big' fitted name='circle outline' />
      				<Icon name='food' />
    				</Icon.Group>
    				<p>Home</p>
    			</Link>
	     		<Link to="/delivery/map">
	     			<Icon.Group size='large'>
      				<Icon size='big' fitted name='circle outline' />
      				<Icon name='map marker alternate' />
    				</Icon.Group>
    				<p>Map</p>
	     		</Link>
	     		<Link to="/restaurant/profile">
	     			<Icon.Group size='large'>
      				<Icon size='big' fitted name='circle outline' />
      				<Icon name='user' />
    				</Icon.Group>
    				<p>Profile</p>
	     		</Link>         
      	</div>
      )
   }
}

export default R_HomeBar

// <Link to="/restaurant"><i className="fa fa-cutlery"></i>Home</Link>