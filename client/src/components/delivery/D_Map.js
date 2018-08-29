/*global google*/
import React, { Component } from 'react'
import D_HomeBar from './D_HomeBar'
import  { compose, withProps, lifecycle, withStateHandlers } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker} from 'react-google-maps'
import InfoBox from "react-google-maps/lib/components/addons/InfoBox"


class D_Map extends Component {
  // constructor(props){
  //   super(props)
  // }
  
render() {
    const DirectionsComponent = compose(
    	withStateHandlers(() => ({
    		isOpen: false,
    	}), {
    		onToggleOpen: ({isOpen}) => () => ({
    			isOpen: !isOpen,
    		})
    	}),
    
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDNIsEsuc8FsHQJsswUcDKUd9k3sZqzk3U",
        loadingElement: <div style={{ height: `400px` }} />,
        containerElement: <div style={{ width: `100%` }} />,
        mapElement: <div style={{height: `600px`, width: `100%` }}  />,
        center: {lat: 36.1699, lng: -115.1398}
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
      <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: -115.1398}}>
			<InfoBox key="i"
			defaultPosition={new google.maps.LatLng(36.1699, -115.1398)}
			options={{
				enableEventPropagation: true,
				alignBottom: true,
				boxStyle: {
					boxShadow: `3px 3px 10px rgba(0,0,0,0.6)`,
					background: "white",
					padding: "10px",
				},
				closeBoxURL: ""
			}}>
			<div className="google_map_infobox">
				<h3>Restaurant Name</h3>
				<p>___ Main Trays</p>
				<p>___ Side Trays</p>
				<button className="ui green button">
					<i className="check circle icon"></i>Confirm Receipt
				</button>
				<button className="ui red button">
					<i className="trash alternate icon"></i>Delete
				</button>
			</div>
			</InfoBox>
	
      	{/*<Marker position={{lat: 36.1699, lng: 115.1100}} onClick={props.onToggleOpen} > */}
       		 {props.directions && <DirectionsRenderer directions={props.directions} suppressMarkers={props.markers}/>}
       		{/* {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
       		 <p>here is some window stuff</p>
       		 </InfoWindow>}
       	</Marker> */}
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