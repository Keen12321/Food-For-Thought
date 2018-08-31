import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<Header>Manage Reports</Header>
			</div>
		)
	}
}

export default withAuth(R_Reports)
