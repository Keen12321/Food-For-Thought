import React, { Component } from 'react'
import {withScriptjs, withGoogleMap, GoogleMap, DirectionsRenderer, Marker} from 'react-google-maps'


class Destination extends Component {
  render() {
    return (
      <AddressSearch
      icon={this.props.addOn}
      placeholder={this.props.name}
      id={this.props.id} onDelete={() => this.props.onDelete(this.props.id)}
      setLocation={(location) => this.props.setLocation(location)}/>
    );
  }
}

class Destinations extends Component {
  constructor(props) {
    super(props);
    this.state = {deleted: new Set()};
  }

  deleteItem(value) {
    this.setState((prevState, props) => ({
      deleted: prevState.deleted.add(value)
    }));
    this.props.deleteLocation(value);
  }


  render() {
    var keys = [];
    var addOn = this.props.addOn;
    var name = this.props.name;
    for (var i = 0; i < this.props.destinationCount; i++) {
      if (!this.state.deleted.has(i)) {
        keys.push(i);
      }
    }

    return (
      <div>
        {keys.map(function (id) {
          return <Destination
            key={id}
            id={id}
            addOn={addOn}
            name={name}
            onDelete={value => this.deleteItem(value)}
            setLocation={(location) => this.props.setLocation(id, location)}
          />;
        }, this)}
      </div>
    );
  }
}

class RouteMapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      waypointCount: 0,
      locations: {
        startLocation: null,
        endLocation: null,
        waypoints: {},
      },
      error: null,
      isSearch: true
    }

    this.addWaypoint = this.addWaypoint.bind(this);
    this.submit = this.submit.bind(this);
    this.isValid = this.isValid.bind(this);
    this.backToSearch = this.backToSearch.bind(this);
  }

  addWaypoint() {
    let locations = this.state.locations;
    locations.waypoints[this.state.waypointCount] = null;
    this.setState((prevState, props) => ({
      waypointCount: prevState.waypointCount + 1,
      locations: locations
    }))
  }

  setTerminalLocation(key, geoLocation) {
      this.setState({error: null});
      let locations = this.state.locations;
      locations[key] = geoLocation;
      this.setState({locations: locations});
  }

  setIntermediateLocation(id, geoLocation) {
      this.setState({error: null});
      let locations = this.state.locations;
      if (!locations.waypoints) locations.waypoints = {};
      locations.waypoints[id] = geoLocation;
      this.setState({locations: locations});
  }

  deleteIntermediateLocation(id) {
      this.setState({error: null});
      let locations = this.state.locations;
      if (!locations.waypoints)
          return;
      delete locations.waypoints[id];
      this.setState({locations: locations});
  }

  backToSearch() {
      var locations = this.state.locations;
      locations.startLocation = null;
      locations.endLocation = null;
      locations.waypoints = {};
      this.setState({
          isSearch: true,
          locations: locations,
          waypointCount: 0
      })
  }

  submit() {
    if (this.isValid()) {
      this.setState({error: null, isSearch: false});
    } else {
      this.setState({
        error:
          <div className="alert alert-danger" role="alert">
            Invalid address(es) in submission, please try again.
          </div>
      })
    }

  }

  isValid() {
    if (!isGeoCodeValid(this.state.locations.startLocation) || !isGeoCodeValid(this.state.locations.endLocation))
      return false;

    for (let id in this.state.locations.waypoints) {
      if (!isGeoCodeValid(this.state.locations.waypoints[id]))
        return false;
    }

    return true;

  }

  render() {
    return (this.state.isSearch ?
      <Modal.Dialog>
        <Modal.Header>
            <div className='text-center'>
                <Modal.Title><Image src={logo} style={logoStyles}/> Route Mapper</Modal.Title>
            </div>
        </Modal.Header>

        <Modal.Body>
          <FormGroup bsSize="large">
            <div className='text-center pickup-add'>
              <Button onClick={this.addWaypoint}>Add a waypoint</Button>
            </div>
          </FormGroup>
          {this.state.error ? this.state.error : null}
          <AddressSearch icon="icon-large icon-direction" placeholder="Starting Point"
          setLocation={(location) => this.setTerminalLocation("startLocation", location)}/>
          <Destinations destinationCount={this.state.waypointCount} addOn="icon-large icon-plus-sign"
          name="waypoint"
          setLocation={(id, location) => this.setIntermediateLocation(id, location)}
          deleteLocation={(id) => this.deleteIntermediateLocation(id)}/>
          <AddressSearch icon="icon-large icon-map-marker" placeholder="Destination"
          setLocation={(location) => this.setTerminalLocation("endLocation", location)}/>
        </Modal.Body>
        <Modal.Footer>
          <div style={wellStyles}>
            <Button bsStyle="primary" bsSize="large" block onClick={this.submit}>Submit</Button>
          </div>
        </Modal.Footer>
      </Modal.Dialog>
      : <Map locations={this.state.locations} onClick={this.backToSearch}/>
    );
  }
}

class Map extends Component {
  render() {
    const locations = this.props.locations;
    const MapComponent = compose(
      withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyCQB0heBBPiuwX7k_fJHKGriDCraCDPRyQ&libraries=geometry,drawing,places,visualization",
        loadingElement: <div style={{height: `100%`}}/>,
        containerElement: <div className="col-xs-12" style={{height: `800px`, paddingTop: `20px`}}/>,
        mapElement: <div className="col-xs-6 map" style={{height: `100%`}}/>
      }),
      withScriptjs,
      withGoogleMap,
      lifecycle({
        componentDidMount() {
          const DirectionsService = new google.maps.DirectionsService();
          DirectionsService.route({
            origin: {placeId: locations.startLocation},
            destination: {placeId: locations.endLocation},
            waypoints: getWaypoints(locations),
            optimizeWaypoints: true,
            travelMode: google.maps.TravelMode.DRIVING,
            provideRouteAlternatives: false,
          }, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              })
            } else {
                console.error(`error fetching directions ${result}`);
            }
          })
        }
      })
    )(props => (
      <div>
        <GoogleMap defaultZoom={8}>
          {props.directions && <DirectionsRenderer directions={props.directions}/>}
        </GoogleMap>
        <Col xs={6} className="text-center">
          {props.directions && <DirectionDetail route={props.directions.routes[0]}/>}
          <Button className="back" onClick={this.props.onClick}>Back</Button>
        </Col>
      </div>
    ))
    return <MapComponent/>
  }
}