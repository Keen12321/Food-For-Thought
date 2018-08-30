import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Icon } from 'semantic-ui-react'

class D_HomeBar extends Component {
   render() {
      return (
         <div className="navbar">
            <Link to="/delivery">
               
               <Icon.Group size='large'>
                  <Icon size='large' fitted name='circle outline' />
                  <Icon size='tiny' name='truck' />
               </Icon.Group>
               <p>Home</p>

            </Link>
            <Link to="/delivery/map">
               <Icon.Group size='large'>
                  <Icon size='large' fitted name='circle outline' />
                  <Icon size='tiny' name='map marker alternate' />
               </Icon.Group>
               <p>Map</p>
            </Link>
            <Link to="/delivery/pickups">
               <Icon.Group size='large'>
                  <Icon size='large' fitted name='circle outline' />
                  <Icon size='tiny' name='map marker alternate' />
               </Icon.Group>
               <p>Pickups</p>
            </Link>
            <Link to="/delivery/profile">
               <Icon.Group size='large'>
                  <Icon size='large' fitted name='circle outline' />
                  <Icon size='tiny' name='user' />
               </Icon.Group>
               <p>Profile</p>
            </Link>
            
   	  </div>
      )
   }
}

export default D_HomeBar