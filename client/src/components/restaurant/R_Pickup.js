import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './R_HomeBar'

class R_Pickup extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<div>
					Request Pickup Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Pickup)