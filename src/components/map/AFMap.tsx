import GoogleMapReact from "google-map-react";
import React from "react";

interface Coordinates {
  location: any;
  zoomLevel: any;
}

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

export const AFMap = ({location, zoomLevel}:Coordinates) => {
  return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>

      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          {/* <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          /> */}
        </GoogleMapReact>
      </div>
    </div>
  );
};
