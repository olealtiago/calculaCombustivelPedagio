import React, { useRef, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import RoutingMachine from "./RoutingMachine";

const fetchCoordinatesFromLocalStorage = (key) => {
  const storedCoordinates = localStorage.getItem(key);

  if (storedCoordinates) {
    return JSON.parse(storedCoordinates);
  }

  return null;
};

const Mapa = () => {
  const mapRef = useRef(null);

  // Recupere as coordenadas salvas do armazenamento local
  const originCoordinates = fetchCoordinatesFromLocalStorage('originCoordinates');
  const destinationCoordinates = fetchCoordinatesFromLocalStorage('destinationCoordinates');

  const [routeDistance, setRouteDistance] = useState(null);

  const saveInfosToLocalStorage = (key, coordinates) => {
    localStorage.setItem(key, JSON.stringify(coordinates));
  };

  // Função para lidar com a distância da rota encontrada
  const handleRouteFound = (distance) => {
    console.log('Distância da rota:', distance);
    setRouteDistance(distance); // Atualize o estado ou faça qualquer outra coisa com a distância
    saveInfosToLocalStorage('routeDistance', distance/1000);
  };

  return ( 
      <MapContainer zoom={5} ref={mapRef} center={[-23.550520, -46.633308]} style={{height: "100vh", width: "100vw"}}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {originCoordinates && destinationCoordinates && (
          <RoutingMachine
            waypoints={[
              L.latLng(
                originCoordinates?.latitude || -23.550520,
                originCoordinates?.longitude || -46.633308
              ),
              L.latLng(
                destinationCoordinates?.latitude || -23.501530,
                destinationCoordinates?.longitude || -47.452274
              ),
            ]}
            onRouteFound={handleRouteFound}
        />
        )}
      </MapContainer>
  );
};

export default Mapa;
