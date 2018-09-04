/*global google*/
import React, { Component } from 'react'
// import D_Pickups from './D_Pickups'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, TrafficLayer, DirectionsRenderer} from 'react-google-maps'
import { withAuth, api } from '../Authentication'
import { connect } from 'react-redux'
import { getAddresses } from '../../actions/donateActions'

import Pickups from './D_Pickups'

class D_Map extends Component {
  state = {
    currentLatLng: {
      lat: 0,
      lng: 0
    },
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
    } else {
      // error => console.log(error)
    }
  }

  componentDidMount() {
    this.showCurrentLocation()
    getAddresses()
    console.log(this)
  }

render() {
  const lat = this.state.currentLatLng.lat
  const lng = this.state.currentLatLng.lng
  const waypnt = this.props.addresses

  const DirectionsComponent = compose(

    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ width: `100%` }} />,
      mapElement: <div style={{height: `600px`, width: `100%` }}  />,
    }),

    withScriptjs,
    withGoogleMap,

    lifecycle({
      componentDidMount() { 
        console.log(this)
        const DirectionsService = new google.maps.DirectionsService()
        DirectionsService.route({
          origin: new google.maps.LatLng({lat:lat, lng:lng}),
          destination: api.getProfile().location,
          waypoints: waypnt, //empty array is ok. array of objects with location and stopover
          optimizeWaypoints: true,
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: {...result}
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
         {props.directions && <DirectionsRenderer directions={props.directions}  />}
         <TrafficLayer autoUpdate />
    </GoogleMap>
  )
  console.log('asdf', this)
return (
	   <div className="pickupsContainer">
	   <div id="scroll">
        <Pickups />
        </div>
        <DirectionsComponent />
     </div>
    )
  }
}

function mapStateToProps(appState) {
	return {
		addresses: appState.appReducer.addresses
	}
}
export default withAuth(connect(mapStateToProps)(D_Map))


