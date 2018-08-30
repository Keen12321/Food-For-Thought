import React from 'react'
import MapWithADirectionsRenderer from './MapWithADirectionsRenderer'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myArray: [
        {lat: -34.397, lng: 150.644},
        {lat: -24.397, lng: 140.644},
        {lat: -14.397, lng: 130.644},
      ]
    };
  };

  render() {
    return (
      <div>
        {
          this.state.myArray.map((a,index) => {
            return <MapWithADirectionsRenderer
              direction={a}
              key={index}
            />
          })
        }
      </div>
    );
  }