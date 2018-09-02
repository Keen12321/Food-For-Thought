import React, { Component } from 'react'
import HomeBar from './R_HomeBar'
import {Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
class ThankYou extends Component{
	
	render(){
		return(
			<div>
				<div id="thanks">
					<h1>Thank you for your donation</h1>
					<p>
						Delivery drivers in the area will be able to view your listing. <br/>  We will notify you when someone is on the way.
					</p>
					<Link to='/restaurant'><Button>Go back home</Button></Link>
				</div>
			</div>
		)
	}
}

export default ThankYou