import React, { Component } from 'react'
import { withAuth } from '../Authentication'
// import Chart from 'chart.js'

class D_Reports extends Component {
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

export default withAuth(D_Reports)