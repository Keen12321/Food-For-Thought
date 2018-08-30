import React, { Component } from 'react'
import { withAuth } from '../Authentication'
class RestaurantProfile extends Component{
	
	render(){
		return(
			<div className="profileContain">
				
				<div id="prof">
					<h2>Your Restaurants Profile</h2>
				</div>
				
				<div id="itemsD">
					<div id="dd">
						<span id="amount">Trays Donated</span>
						<span id='numberr'>22</span>
					</div>
				</div>
				

				<div id="option">
					<button className='ui button' role='button'>
  							Dontation History
					</button>
					<p>You will be able to access all of your dontaions from this page.</p>
				</div>

				<div id="option">
					<button className="ui button" role='button'>
						Delete Donation
					</button>
					<p>from here you will be able to delete any pre-existing donations.</p> 
				</div>

				<div id="option">
					<button className="ui button" role='button'>
						Donate Food
					</button>
					<p>From here you will be able to donate food to people in need</p> 
				</div>
			</div>
		)
	}
}

export default withAuth(RestaurantProfile)


//lines 14 through 19 are optional, but it shouldnt be too hard to make