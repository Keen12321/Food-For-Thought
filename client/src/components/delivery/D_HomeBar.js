import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

class D_HomeBar extends Component {
  state = {}

  handleClick = (e, { name }) => 
  this.setState({
    activeItem: name
  })

  logout = (e) => {
    this.props.signout()
  }

  render() {
    const { activeItem } = this.state
    const trigger = (
      <div>
        <span className='navUsername'>
          Welcome, {api.getProfile().name}!
        </span>
        <Icon name='user' size='large'/>
      </div>
    )

    return (
      <Menu size='huge' inverted>
        <Menu.Item>
          <Icon name='truck' size='large'/>
        </Menu.Item>
        <Menu.Item as={Link} to='/delivery' name='Home' 
          active={activeItem === 'Home'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='/delivery/map' name='Map' 
          active={activeItem === 'Map'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='/delivery/pickups' name='Pickups' 
          active={activeItem === 'Pickups'} onClick={this.handleClick} />

        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} pointing='top right' item>
            <Dropdown.Menu >
              <Dropdown.Item as={Link} to='/delivery/profile' key='user'
                text='Edit Profile' icon='user'/>
              <Dropdown.Item as={Link} to='/login' onClick={this.logout} 
                key='sign-out' text='Sign Out' sign out/>   
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withAuth(D_HomeBar)
