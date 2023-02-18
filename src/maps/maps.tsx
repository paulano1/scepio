
import React from 'react';
import GoogleMapReact from 'google-map-react';


 const defaultProps = {
   center: {
     lat: 10.99835602,
     lng: 77.01502627,
   },
   zoom: 11,
 };

export default function SimpleMap() {
 
  return (
    <>
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyCP5BUL8UfEmtBa6Z36i_gKJrPSxkJpJdM' }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
    </>
  );
}
