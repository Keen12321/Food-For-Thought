import React, { Component } from 'react'
import { withAuth } from '../Authentication'

class R_Pickup extends Component {
	render() {
		return (
			<div>
				<div>
					Request Pickup Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Pickup)