import React, { Component } from 'react'
import { getDefault } from '../../actions/donateActions'
class DefaultDonations extends Component{
	state ={
		donations:[],
		dish: '',
		tray:'',
		value:''
	}

	componentDidMount(){
		getDefault(this.state.id)	
	}
	render(){
		return(
			<div><h1>Hello world</h1></div>
		)
	}
}

export default DefaultDonations