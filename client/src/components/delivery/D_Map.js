import React, { Component } from 'react'
import D_HomeBar from './D_HomeBar'
import {GoogleApiWrapper, InfoWindow, Map, Marker} from 'google-maps-react'

class D_Map extends Component {
	constructor(props) {
		super(props)
		this.state = {
			showingInfoWindow: false,
			activeMarker: {},
			selectedPlace: {}
		}
		//binding this to event handler functions
		this.onMarkerClick = this.onMarkerClick.bind(this)
		this.onMapClick = this.onMapClick.bind(this)
	}

	onMarkerClick = (props, marker, e) => {
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})
	}

	onMapClick = (props) => {
		if(this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			})
		}
	}

 render() {
 	const style = {
 		width: '100%',
 		height: '400px'
 	}
 	return (
   		<Map //the actual google map component from googleAPI
   			item
   			xs = {12}
   			style = {style}
   			google = {this.props.google}
   			onClick = {this.onMapClick}
   			zoom = {14}
   			initialCenter = {{lat: 36.1098901, lng: -115.2282014}}>
				<Marker //the red marker on map will represent the delivery home
					onClick = {this.onMarkerClick}
					title = {'Las Vegas Rescue Mission'}
					position = {{lat: 36.1098901, lng: -115.2282014}}
					name = {'Las Vegas Rescue Mission'} />
				<InfoWindow
					marker = {this.state.activeMarker}
					visible = {this.state.showingInfoWindow}>
					Info window stuff goes here
				</InfoWindow>
   		</Map>
   )
 }
}

export default GoogleApiWrapper({
	api: (process.env.AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U)})(D_Map)