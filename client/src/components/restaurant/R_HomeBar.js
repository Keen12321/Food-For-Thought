import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {Menu, Dropdown, Icon} from 'semantic-ui-react'

class R_HomeBar extends Component {
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
        <Icon name='user' size='big'/>
      </div>
    )
    return (
      <Menu size='big' inverted>
        <Menu.Item>
          <Icon name='truck' size='large'/>
        </Menu.Item>
        <Menu.Item as={Link} to='/restaurant' name='Home' active={activeItem === 'Home'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='/restaurant/donate' name='Donate' active={activeItem === 'Donate'} onClick={this.handleClick} />

        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} pointing='top right' icon item>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/restaurant/profile' key='user' 
                text='Edit Profile' icon='user'/>
              <Dropdown.Item as={Link} to='/login' onClick={this.logout} 
                key='sign-out' text='Sign Out' icon='sign out' />   
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default withAuth(R_HomeBar)

