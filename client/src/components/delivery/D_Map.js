/*global google*/
import React, { Component } from 'react'
import D_Pickups from './D_Pickups'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'
import { withAuth } from '../Authentication'

class D_Map extends Component {

  
render() {
    const DirectionsComponent = compose(
    	

      withScriptjs,
      withGoogleMap,

      lifecycle({
        componentDidMount() { 
          const DirectionsService = new google.maps.DirectionsService()
          DirectionsService.route({
            origin: `Las Vegas Rescue Mission`, //this address is geolocated. should be coordinates
            destination: `Las Vegas Rescue Mission`, //this address is pulled from the user database. can be street address or coordinates
            waypoints: [{location: '470 Windmill Lane, Las Vegas, NV 89123', stopover: true},
            			{location: "Raku, Las Vegas, NV", stopover: true}], //these addresses are pulled from the array of pickups created by restaurants. can be street address or coordinates.
            optimizeWaypoints: true,
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
          });
        }
      })
    )(props =>
      <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: -115.1398}}>
       		 {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
       		
      </GoogleMap>
    )
return (
	<div className="pickupsContainer">
        <D_Pickups />
        <DirectionsComponent
        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U"
        loadingElement={<div style={{ height: `400px` }} />}
        containerElement={<div style={{ width: `100%` }} />}
        mapElement={<div style={{height: `600px`, width: `100%` }}  />}
        />
     </div>
    )
  }
}
export default withAuth(D_Map)