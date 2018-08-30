import React, { Component } from 'react'
import { withAuth } from '../Authentication'

class R_Profile extends Component {
	render() {
		return (
			<div>
				<div>
					Manage Profile Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Profile)