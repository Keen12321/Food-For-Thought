import React, {Component} from 'react'
import {withAuth, api} from '../Authentication'
import {updatePickup, getMyPickups} from '../../actions/donateActions'
import {connect} from 'react-redux'
import PickupsList from './D_PickupsList'
import { Header} from 'semantic-ui-react'

class Pickups extends Component {

	componentDidMount() {
		getMyPickups(api.getProfile().id)
		updatePickup()
  }
  
  componentWillReceiveProps(newProps) {
    if (this.props.mypickups.length !== newProps.mypickups.length) {
      updatePickup()
    }
  }

	render() {
		return (
      <div>
      	<div className="reversepickups">
      	{this.props.mypickups.map(user => (
        	<PickupsList key={user.id} user={user} show1={this.props.show} 
        		show2={this.props.show} show3={this.props.show} />
        ))}
        </div>
    		<div className="ui raised vertical segment">
      			<Header as='h3' content='Home' />
      			<Header as='h4' content={api.getProfile().name} />
      			<p>{api.getProfile().location}</p>
    		</div>
      </div> 
    )
  }
}

function mapStateToProps(appState) {
	return {
		mypickups: appState.appReducer.mypickups
	}
}

export default withAuth(connect(mapStateToProps)(Pickups))
