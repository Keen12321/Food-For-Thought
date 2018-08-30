import React, { Component } from 'react'
import { withAuth } from '../Authentication'

// import Chart from 'chart.js'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<div>
					Reports Page
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)