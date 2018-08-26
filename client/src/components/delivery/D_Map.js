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

	onMarkerClick = (props, marker, e) => { //shows the infoWindow
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		})
	}

	onMapClick = (props) => { //removes infoWindow
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
 	if (!this.props.loaded) {
 		return
 			<div>
 				Loading...
 			</div>
 	}
 	return (
 		<div>
 		<D_HomeBar />
   		<Map //the actual google map component from googleAPI
   			item
   			xs = {12}
   			style = {style}
   			google = {this.props.google}
   			onClick = {this.onMapClick}
   			zoom = {14}
   			initialCenter = {{lat: 36.177523, lng: -115.147691}}>
				<Marker //the red marker on map will represent the delivery home
					onClick = {this.onMarkerClick}
					title = {'Las Vegas Rescue Mission'}
					position = {{lat: 36.177523, lng: -115.147691}}
					name = {'Las Vegas Rescue Mission'} />
				<Marker //the blue marker on map will represent the restaurant home
					onClick = {this.onMarkerClick}
					icon = {{color: 'blue'}}
					title = {'Raku'}
					position = {{lat: 36.127041, lng: -115.209819}}
					name = {'Raku'} />

				<InfoWindow
					marker = {this.state.activeMarker}
					visible = {this.state.showingInfoWindow}>
					<p>{this.state.selectedPlace.name}</p>
					<p>3 main trays</p>
					<p>4 side trays</p>
				</InfoWindow>
   		</Map>
   		</div>
   )
 }
}

export default GoogleApiWrapper({
	api: (process.env.AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U)})(D_Map)