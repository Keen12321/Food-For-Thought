import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<div>
					<Header>Manage Reports Page</Header>
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)