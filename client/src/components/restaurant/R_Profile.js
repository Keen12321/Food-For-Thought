import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './R_HomeBar'

class R_Profile extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<div>
					Manage Profile Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Profile)