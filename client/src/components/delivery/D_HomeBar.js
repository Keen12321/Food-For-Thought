import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {api} from '../Authentication'
import { Dropdown } from 'semantic-ui-react'

class D_HomeBar extends Component {
  render() {
    const trigger = (
      <span>
        {api.getProfile().name}
      </span>
    )

    const options = [
      { key: 'user', text: 'Account', icon: 'user' },
      { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return (
    	<div className="D_navbar">
    		<div className="D_navbar left">
    			<Link to="/delivery"><i className="fa-nav fa fa-truck" />Home</Link>
    			<Link to="/delivery/map">Map</Link>
    			<Link to="/delivery/pickups">Pickups</Link>
    		</div>
    		<div className="D_navbar right">
    			<Dropdown trigger={trigger} options={options} pointing='top right' icon={null} />
    		</div>
    	</div>
    )
  }
}

export default D_HomeBar