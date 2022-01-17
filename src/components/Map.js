import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import styled from "styled-components";

// import { Icon } from "leaflet";
// import "leaflet/dist/leaflet.css";
// import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
// import "leaflet-defaulticon-compatibility";
// import imgUrl from "../components/img/icon-location.png";
import "../index.css";

const Map = ({ lng, lat, data1, data2 }) => {
  const position = [lat, lng];
  return (
    <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          {data1} <br /> {data2}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
