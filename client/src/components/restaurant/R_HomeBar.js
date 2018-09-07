import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {Menu, Dropdown, Icon} from 'semantic-ui-react'

class R_HomeBar extends Component {
  state = {
    size: 'huge',
    stackable: false}

componentWillMount() {
    window.addEventListener('resize', this.handleMobile)
}
componentWillUnmount() {
  window.removeEventListener('resize', this.handleMobile)
}
handleMobile = () => {
  this.setState({
    size: 'tiny',
    stackable: true
  })
}

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
      <Menu size={this.state.size} stackable={this.state.stackable} inverted>
        <Menu.Item>
          <Icon name='truck' id='truck' size='large'/>
        </Menu.Item>
        <Menu.Item as={Link} to='/restaurant' name='Home' 
          active={activeItem === 'Home'} onClick={this.handleClick} />
        <Menu.Item as={Link} to='/restaurant/donate' name='Donate' 
          active={activeItem === 'Donate'} onClick={this.handleClick} />

        <Menu.Menu position='right'>
          <Dropdown trigger={trigger} pointing='top right'  item>
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
