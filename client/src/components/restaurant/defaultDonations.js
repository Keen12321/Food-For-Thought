import React, { Component } from 'react'
import { getDefault } from '../../actions/donateActions'
import { api } from '../Authentication'
class DefaultDonations extends Component{
	state ={
		donations:[],
		dish: '',
		tray:'',
		value:'',
		id:api.getProfile().id
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