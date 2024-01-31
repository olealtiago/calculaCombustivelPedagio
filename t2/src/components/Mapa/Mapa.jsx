import React, { useRef } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import './Mapa.css';
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";

const Mapa = () => {
  const mapRef = useRef(null);

  return ( 
      <MapContainer zoom={5} ref={mapRef} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <RoutingMachine
          waypoints={[
            L.latLng(-23.5489, -46.6388),
            L.latLng(-22.0154, -47.8911),
          ]}
        />
      </MapContainer>
  );
};

export default Mapa;
