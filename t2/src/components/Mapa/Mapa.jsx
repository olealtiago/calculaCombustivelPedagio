import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Mapa.css'; // Importe o arquivo de estilo

const Mapa = ({ latitude, longitude }) => {
  const center = [latitude, longitude];

  return (
    <MapContainer className="map-container" center={center} zoom={20}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        minZoom={2}
        maxZoom={18}
      />
      <Marker position={center}>
        <Popup>
          <div>
            <strong>Localização</strong>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
