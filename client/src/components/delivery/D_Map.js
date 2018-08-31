/*global google*/
import React, { Component } from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import {api} from '../Authentication'

import Pickups from './D_Pickups'


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
  }

render() {
  const lat = this.state.currentLatLng.lat
  const lng = this.state.currentLatLng.lng
  const DirectionsComponent = compose(

    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U",
      loadingElement: <div style={{ height: `400px` }} />,
      containerElement: <div style={{ width: `100%` }} />,
      mapElement: <div style={{height: `600px`, width: `100%` }}  />,
    }),

    withScriptjs,
    withGoogleMap,

    lifecycle({
      componentDidMount() { 
        const DirectionsService = new google.maps.DirectionsService()
        DirectionsService.route({
          origin: new google.maps.LatLng({lat:lat, lng:lng}),
          destination: api.getProfile().address,
          travelMode: google.maps.TravelMode.DRIVING,
        }, (result, status) => {
          
          if (status === google.maps.DirectionsStatus.OK) {
            this.setState({
              directions: {...result},
              markers: true
            })
          } else {
            console.error(`error fetching directions ${result}`)
          }
        })
      }
    })
  )(props =>
    <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: -115.1398}}>

      {/*<Marker position={{lat: 36.1699, lng: 115.1100}} onClick={props.onToggleOpen} > */}
         {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
        {/* {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
         <p>here is some window stuff</p>
         </InfoWindow>}
      </Marker> */}
    </GoogleMap>
  )
return (
	   <div className="pickupsContainer">
        <Pickups />
        <DirectionsComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDKvcSq2gVj-NCb4SYr2FCfuic3Wq4zZFE"
        loadingElement={<div style={{ height: `400px` }} />}
        containerElement={<div style={{ width: `100%` }} />}
        mapElement={<div style={{height: `600px`, width: `100%` }}  />}
        />
     </div>
    )
  }
}

export default D_Map