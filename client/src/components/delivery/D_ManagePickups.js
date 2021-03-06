import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import { getDonations, updatePickup } from '../../actions/donateActions'
import { connect } from 'react-redux'
import ManagePickupsList from './D_ManagePickupsList'
import { Container, Divider, Header} from 'semantic-ui-react'

class ManagePickups extends Component {
	componentDidMount() {
		getDonations()
		updatePickup() 
	}
	componentWillReceiveProps(newProps) {
		if(this.props.donate.length !== newProps.donate.length) {
			updatePickup()
		}
  }

	render() {
		return (
	    <div>
		    <Header as='h1' id="centext">Pickups available for today: {this.props.donate.length}</Header>
	    	{this.props.donate.map(user => (
	    		<Container key={'container' + user.id}>
	      		<Divider />
	      		<ManagePickupsList key={user.id} user={user} show1={this.props.show} show2={this.props.show} show3={this.props.show} />
	      	</Container>
	      ))}
	    </div> 
		)
	}
}

function mapStateToProps(appState) {
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(ManagePickups))