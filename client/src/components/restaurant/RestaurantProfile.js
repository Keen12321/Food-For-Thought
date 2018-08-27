import React, { Component } from 'react'

class RestaurantProfile extends Component{
	
	render(){
		return(
			<div className="profileContain">
				<div id="head">
					<button><i class="fa fa-arrow-left"></i></button>
					<div id="label">
						<h1>Your Profile</h1>
					</div>
				</div>
			</div>
		)
	}
}

export default RestaurantProfile