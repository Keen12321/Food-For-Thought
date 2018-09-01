import React, { Component } from 'react'
import { getDonations, updatePickup } from '../../actions/donateActions'

class Stuff extends Component {

	componentDidMount() {
		getDonations()
		updatePickup()
	}
 render() {
   return (
   	<div>
   		{this.props.donate.map(user => (
			<p>{this.props.user.location}
			</p>
   			))}
     </div>
   )
 }
   		}

export default Stuff