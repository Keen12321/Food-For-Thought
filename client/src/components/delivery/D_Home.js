import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {withAuth, api} from '../Authentication'
import {connect} from 'react-redux'
import { getDonations } from '../../actions/donateActions'
import {Segment, Button, Header} from 'semantic-ui-react'

class D_Home extends Component {
  state = {
      id:api.getProfile().id
   }

   componentDidMount() {
    getDonations()
   }
  //  componentWillReceiveProps(newProps) {
  //   if (this.props.donate !== newProps.donate) {
  //     getDonations(newProps)
  //   } else {
  //     getDonations()
  //   }
  // }

  // componentWillReceiveProps(newProps) {
  //   if ( this.props.donate !== newProps.donate)  {
  //     getDonations(newProps)
  //   } else {
  //     getDonations()
  //   }
  // }



  render() {
    return (
      <div>
        <div className="pickupnotification">
          <Header as='h1'>Pickups available for today: {this.props.donate.length}</Header>
        </div>
        <Segment className="D_HomeContainer" basic>
     			<div>
     				<Link to={`/delivery/map/${this.state.id}`}>
              <Button color='green' fluid id="shadow" type="submit" size="huge" content="My Pickups Map" />
              </Link>
     			</div>
     			<div>
     				<Link to="/delivery/pickups">
              <Button color='blue' fluid id="shadow" type="submit" size="huge" content="View All Available Pickups" />
            </Link>
     			</div>
          <div>
            <Link to={`/delivery/reports/${this.state.id}`}>
              <Button color='red' fluid id="shadow" type="submit" size="huge" content="Manage Reports" />
            </Link>
          </div>
     		</Segment>
     	</div>
   )
 }
}

function mapStateToProps(appState) {
  return {
    donate: appState.appReducer.donate
  }
}
export default withAuth(connect(mapStateToProps)(D_Home))