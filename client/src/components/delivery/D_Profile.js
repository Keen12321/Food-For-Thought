import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'

class D_Profile extends Component {
	render() {
		return (
			<div>
				<Header>Delivery Profile</Header>
			</div>
		)
	}
}

export default withAuth(D_Profile)