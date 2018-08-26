import React, { Component } from 'react'

class Details extends Component {
	render() {
		return (
			<div>
				<form className="donate__details-container">
					<input className="donate__food-type" type="text" placeholder="Food Item(s)" />
					<input className="donate__food-size" type="text" placeholder="Number of trays" />
					<button className="donate__details-submit" type="submit">Submit</button>
				</form>
			</div>
		)
	}
}

export default Details