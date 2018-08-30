import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './R_HomeBar'
// import Chart from 'chart.js'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<div>
					Reports Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)