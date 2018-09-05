import React, {Component} from 'react'
import {withAuth} from '../Authentication'
import {getDonations, updatePickup} from '../../actions/donateActions'
import {connect} from 'react-redux'
import { Header, Container, Divider } from 'semantic-ui-react'
import ManagePickupsList from './D_ManagePickupsList'

class D_ManagePickups extends Component {
	componentDidMount() {
		getDonations()
		updatePickup() 
	}
	
	componentWillReceiveProps(newProps) {
		if(this.props.donate !== newProps.donate) {
			updatePickup()
			getDonations(newProps)
		} else {
			getDonations()
		}
  }

	render() {
		return (
	    <Container>
	    	<Header as='h1'>Manage Pickups</Header>
	    	{this.props.donate.map(user => (
	    		<Container>
	      		<Divider />
	      		<ManagePickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
	      	</Container>
	      ))}
	    </Container> 
		)
	}
}

function mapStateToProps(appState) {
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(D_ManagePickups))
