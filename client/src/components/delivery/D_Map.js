/*global google*/
import React, { Component } from 'react'
import D_HomeBar from './D_HomeBar'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer} from 'react-google-maps'


class D_Map extends Component {
  // constructor(props){
  //   super(props)
  // }
  
render() {
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
            origin: `Las Vegas Rescue Mission`,
            destination: `Las Vegas Rescue Mission`,
            waypoints: [{location: '470 Windmill Lane, Las Vegas, NV 89123', stopover: true},
            			{location: "Raku, Las Vegas, NV", stopover: true}],
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
      <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: 115.1398}}>
       		 {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
      </GoogleMap>
    )
return (
	<div>
		<D_HomeBar />
        <DirectionsComponent
        />
     </div>
    )
  }
}
export default D_Map