import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '80%',
  height: '50%',
  margin: '10%'
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [{lat:1,lng:2}]
    };
  }
  componentDidMount() {
    console.log(this.props.locations);
    this.setState({
      locations: this.props.locations
    });
  }
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={
          {
            lat: -1.2884,
            lng: 36.8233
          }
        }
        places = {this.state.markers}
      >
        {this.state.locations.map((location,i) => {
          return (
            <Marker
              key = {i}
              position={{ lat: location.lat, lng: location.lng }}
              />
          );
        })}
      </Map>  
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlJi_Ijy8_ugAxBGbeYyNdC44WvvsOZe0'
})(MapContainer);