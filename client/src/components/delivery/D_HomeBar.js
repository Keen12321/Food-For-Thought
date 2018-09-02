import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import { Dropdown } from 'semantic-ui-react'

class D_HomeBar extends Component {
  logout = (e) => {
    this.props.signout()
  }

  render() {
    const trigger = (
      <span>
        Account
      </span>
    )

    return (
    	<div className="D_navbar">
    		<div className="D_navbar left">
    			<Link to="/delivery"><i className="fa-nav fa fa-truck" />Home</Link>
    			<Link to="/delivery/map">Map</Link>
    			<Link to="/delivery/pickups">Pickups</Link>
    		</div>
    		<div className="D_navbar right">
    			<Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item key='username'>
                <span>
                  Signed in as <strong>{api.getProfile().name}</strong>
                </span>
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item as={Link} to='/delivery/profile' key='user' text='Edit Profile' icon='user'/>
              <Dropdown.Item as={Link} to='/login' onClick={this.logout} key='sign-out' text='Sign Out' icon='sign out' />   
            </Dropdown.Menu>
          </Dropdown>
    		</div>
    	</div>
    )
  }
}

export default withAuth(D_HomeBar)
