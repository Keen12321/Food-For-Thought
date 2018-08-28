import React, { Component } from 'react'
import { withAuth } from '../Authentication'
import HomeBar from './D_HomeBar'


class D_Pickups extends Component {
 render() {
   return (
      <div>
         <HomeBar />
   		<div className="pickups ui vertical segment">
   			<div>
  				<p>Restaurant Name</p>
  				<p>Restaurant address</p>
  			</div>
  			<div>
  				<p>Number of main trays</p>
  				<p>Number of side trays</p>
  			</div>
  			<div>
  				<button className="ui green button">
					<i class="map pin icon"></i>Add to Map
				</button>
				<button className="ui red button">
					<i className="trash alternate icon"></i>Delete
				</button>
  			</div>
		</div>
		<div class="ui vertical segment">
  			<p>I'm here just to show how these divs are separated.
  				Delete me when this page is dynamic</p>
		</div>
      </div>
     
   )
 }
}

export default withAuth(D_Pickups)