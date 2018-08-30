import React, { Component } from 'react'
import { withAuth } from '../Authentication'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<div>
					Manage Reports Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)