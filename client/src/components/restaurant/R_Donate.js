import React, { Component } from 'react'

class R_Donate extends Component {
	state = {
		foodItem: '',
		foodSize: ''
	}

	handleSubmit = (e) => {
		e.preventDefault()
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	
	render() {
		return (
			<div className="donate-container">

				<form className="donate__details-container">
					<div>
						<input className="donate__food-type" type="text" 
							value={this.state.foodItem} onChange={this.handleChange} 
							name="food-item" placeholder="Food Item(s)" />
					</div>
					<div>
						<input className="donate__food-size" type="text" 
							value={this.state.foodSize} onChange={this.handleChange}
							name="food-size" placeholder="Number of trays" />
					</div>
					<button className="donate__details-submit" onClick={this.handleSubmit} 
						type="submit">Submit</button>
				</form>

			</div>
		)
	}
}

export default R_Donate