import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Container } from 'semantic-ui-react'

import HomeBar from './R_HomeBar'

class R_Profile extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<Container>
					Manage Profile Page
				</Container>
			</div>
		)
	}
}

export default withAuth(R_Profile)