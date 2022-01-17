import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import IconLocation from "./IconPosition";

import "../index.css";

const MapView = ({ lng, lat, data1, data2 }) => {
  const position = [lat, lng];
  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={IconLocation}>
        <Popup>
          {data1} <br /> {data2}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
