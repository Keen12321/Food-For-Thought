import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {Dropdown, Icon} from 'semantic-ui-react'

class R_HomeBar extends Component {
  logout = (e) => {
      this.props.signout()
    }

  render() {
    const trigger = (
      <span>
        Welcome, {api.getProfile().name}
      </span>
    )

    return (
    	<div className="D_navbar">
    		<div className="D_navbar left">
    			<Link to="/restaurant"><Icon name='food' />Home</Link>
    			<Link to="/restaurant/donate">Donate</Link>
    		</div>
    		<div className="D_navbar right">
    			<Dropdown trigger={trigger} pointing='top right' icon={null}>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to='/restaurant/profile' key='user' 
                text='Edit Profile' icon='user'/>
              <Dropdown.Item as={Link} to='/login' onClick={this.logout} 
                key='sign-out' text='Sign Out' icon='sign out' />   
            </Dropdown.Menu>
          </Dropdown>
    		</div>
    	</div>
    )
  }
}

export default withAuth(R_HomeBar)

