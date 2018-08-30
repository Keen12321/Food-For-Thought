import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { getDonations } from '../../actions/delivery-actions/deliveryActions'
import { Container, Header } from 'semantic-ui-react'

class D_Pickups extends Component {
	componentDidMount() {
		getDonations(this.props.match.parsams)
	}

 render() {
   return (
		<div>
			<Container>
				<Header>Pickups List</Header>

			</Container>
		</div>
   )
 }
}

export default withAuth(D_Pickups)