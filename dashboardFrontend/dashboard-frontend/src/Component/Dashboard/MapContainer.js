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
  componentDidUpdate(prevProps) {
    console.log("Prop length")
    // console.log(this.props.locations.length)
    // console.log(prevProps.locations.length)
    
    if(this.props.locations.length != prevProps.locations.length)
    {
      console.log("In prop change")
      console.log(this.props.locations);
      this.setState({
        locations: this.props.locations
      });  
    } 
  }
  componentDidMount() {
    console.log("in comp mount")
    console.log(this.props)
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