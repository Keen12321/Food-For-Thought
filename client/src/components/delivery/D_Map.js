/*global google*/
import React, { Component } from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import { withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer } from 'react-google-maps'
import { withAuth, api } from '../Authentication'
import { getDonations } from '../../actions/donateActions'
import { connect } from 'react-redux'

import D_Pickups from './D_Pickups'

class D_Map extends Component {
  state = {
    currentLatLng: {
      lat: 0,
      lng: 0
    }
  }

  showCurrentLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition( position => {
        this.setState({
          currentLatLng: {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
        })
      })
      console.log(this)
    } else {
      error => console.log(error)
    }
  }

  componentDidMount() {
    this.showCurrentLocation()
    getDonations()
  }

render() {
  const lat = this.state.currentLatLng.lat
  const lng = this.state.currentLatLng.lng

  const DirectionsComponent = compose(

    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ width: `100%` }} />,
      mapElement: <div style={{height: `100%`, width: `100%` }}  />,
    }),

    withScriptjs,
    withGoogleMap,

    lifecycle({
      componentDidMount() { 
        const DirectionsService = new google.maps.DirectionsService()
        DirectionsService.route({
        	 
          origin: new google.maps.LatLng({lat:lat, lng:lng}),
          destination: api.getProfile().address,


          waypoints: [{location: 'Raku, Las Vegas, NV', stopover: true},
          				],
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: {...result},
              markers: true
            })
          }
           else {
            console.error(`error fetching directions ${result}`)
          }
        })
      }
    })
  )(props =>
    <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: -115.1398}}>
         {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
    </GoogleMap>
  )
  return (
	   <div className="pickupsContainer">
	   <div id="scroll">
        <D_Pickups />
        </div>
        <DirectionsComponent />
     </div>
    )
  }
}

function mapStateToProps(appState) {
	console.log('appstate', appState)
	return {
		donate: appState.appReducer.donate
	}
}
export default withAuth(connect(mapStateToProps)(D_Map))


