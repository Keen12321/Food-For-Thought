import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { getDonations } from '../../actions/delivery-actions/deliveryActions'
import { Container, Header } from 'semantic-ui-react'

import HomeBar from './D_HomeBar'

class D_Pickups extends Component {
	componentDidMount() {
		getDonations(this.props.match.params)
	}

 render() {
   return (
		<div>
			<HomeBar />
		
			<Container>
				<Header>Pickups List</Header>
				{this.props.donations.map(data => (
						<div key={data.id}>
							{data.name}
							{data.trays}
						</div>
				))}
			</Container>
		</div>
   )
 }
}

export default withAuth(D_Pickups)