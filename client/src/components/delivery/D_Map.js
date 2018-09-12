/*global google*/
import React, { Component } from 'react'
import  { compose, withProps, lifecycle } from 'recompose'
import {withScriptjs, withGoogleMap, GoogleMap, TrafficLayer, DirectionsRenderer} from 'react-google-maps'
import {Link} from 'react-router-dom'
import { withAuth, api } from '../Authentication'
import { connect } from 'react-redux'
import { getAddresses } from '../../actions/donateActions'
import Pickups from './D_Pickups'
import {Header, Button} from 'semantic-ui-react'

class D_Map extends Component {
  state = {
    currentLatLng: {
      lat: 0,
      lng: 0
    },
    rte: [],
    result: {}
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
    }
  }

  componentDidMount() {
    this.showCurrentLocation()
    getAddresses(api.getProfile().id)
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
      mapElement: <div style={{height: `80vh`, width: `100%` }}  />,
    }),
      withScriptjs,
      withGoogleMap,

    lifecycle({
      componentDidMount() { 
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
              directions: {...result},
              routes: {...result.routes},
              rte: {...result.routes}
            })
            this.setState({
              result: result
            })
          }
        })
      }
    })
  )(props => 
          <GoogleMap defaultZoom={8} center={{lat: 36.1699, lng: -115.1398}}>
             <DirectionsRenderer
             directions={props.directions} />

             <TrafficLayer autoUpdate />
          </GoogleMap>
       
  )
  if(this.props.addresses.length === 0) {
    return (
        <div>
          <Header as='h1' id="centext">Donations scheduled for {api.getProfile().name}: {this.props.addresses.length}</Header>
          <div className="pickupsContainer">
            <div id="scroll">
              <h3>All pickups completed.</h3>
              <h3>Please return to:</h3>
              <p> {api.getProfile().location}</p>
              <p>or you can</p>
              <Link to="/delivery/pickups">
                <Button color='blue' type="submit" id="bluebtn" className="lgfont" content='View Any Additional Pickups' />
              </Link>
            </div>
            <DirectionsComponent />
          </div>
        </div>
        )
  } 
return (
        <div>
          <Header as='h3' id="centext">Donations scheduled for {api.getProfile().name}: {this.props.addresses.length}</Header>
          <div className="pickupsContainer">
                <div id="scroll">
                  <Pickups />
                </div>
                  <DirectionsComponent />
          </div>
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