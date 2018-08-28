import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './R_HomeBar'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<div>
					Manage Reports Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)