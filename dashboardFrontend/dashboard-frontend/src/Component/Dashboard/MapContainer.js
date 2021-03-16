import React from 'react';
import {GoogleMap, LoadScript} from '@react-google-maps/api';

const MapContainer = () => {
    const mapStyles = {
        height: "50vh",
        width: "80%",
        margin: "10%"};

        const defaultCenter = {
            lat: 41.3851, lng: 2.1734
        }
        return (
            <LoadScript
              googleMapsApiKey='AIzaSyBlJi_Ijy8_ugAxBGbeYyNdC44WvvsOZe0'>
               <GoogleMap
                 mapContainerStyle={mapStyles}
                 zoom={13}
                 center={defaultCenter}
               />
            </LoadScript>
         )
}
export default MapContainer;