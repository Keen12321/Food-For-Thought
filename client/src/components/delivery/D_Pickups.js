import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { connect } from 'react-redux'
import { getDonations } from '../../actions/delivery-actions/deliveryActions'
import { Container, Header, Grid, Button } from 'semantic-ui-react'

class D_Pickups extends Component {
	componentDidMount() {
		getDonations()
	}

	render() {
		return (
			<Container>
				<Header>Pickups List</Header>

				<Grid>	
					{this.props.donations.map( data => (
						<div key={data.id}>
							<Grid.Row>
								<Grid.Column>
									{data.dish}
									{data.address}
									{data.date}
								</Grid.Column>
								<Button color='green' type='submit'>Accept</Button>
								<Button color='red' type='submit'>Decline</Button>
							</Grid.Row>
						</div>
					))}
				</Grid>

			</Container>
		)
	}
}

function mapStateToProps(appState) {
	return {
		donations: appState.appReduce.donations
	}
}

export default withAuth(connect(mapStateToProps)(D_Pickups))
