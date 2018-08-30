import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { Header } from 'semantic-ui-react'
import HomeBar from './R_HomeBar'

class R_Reports extends Component {
	render() {
		return (
			<div>
				<HomeBar />
				<div>
					<Header>Manage Reports Page</Header>
				</div>
			</div>
		)
	}
}

export default withAuth(R_Reports)