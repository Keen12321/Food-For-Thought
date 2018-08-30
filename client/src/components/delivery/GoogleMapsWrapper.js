import React, { Component } from 'react'
import {GoogleMap, withGoogleMap, withScriptjs} from 'react-google-maps'

export default const GoogleMapsWrapper = withScriptjs(withGoogleMap(props => {
	{
   return <GoogleMap {...props} ref={props.onMapMounted}>
   		{props.children}
   		</GoogleMap>
 }))

