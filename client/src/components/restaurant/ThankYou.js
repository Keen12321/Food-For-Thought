import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Header } from 'semantic-ui-react'

class ThankYou extends Component {
	render() {
		return (
			<div>
				<div id="thanks">
					<Header as='h1' content="Thank you for your donation" />
					<p>Delivery drivers in the area will be able to view your listing. <br/>  We will notify you when someone is on the way.
					</p>
					<Link to='/restaurant'><Button content="Go back home" /></Link>
				</div>
			</div>
		)
	}
}
export default ThankYou