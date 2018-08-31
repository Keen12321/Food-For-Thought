import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { connect } from 'react-redux'

import { getDonations } from '../../actions/delivery-actions/deliveryActions'
import { Container, Header } from 'semantic-ui-react'

class D_Pickups extends Component {
	componentDidMount() {
		getDonations()
	}

 render() {
   return (
		<div>
			<Container>
				<Header>Pickups List</Header>
				{this.props.donations.map( data => (
					<div key={data.id}>
						{data.dish}
						{data.address}
						{data.date}
					</div>
				))}

			</Container>
		</div>
   )
 }
}

function mapStateToProps(appState) {
	return {
		donations: appState.appReduce.donations
	}
}

export default withAuth(connect(mapStateToProps)(D_Pickups))