import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIconImg from "../../assets/marker-icon.png";

const createRoutineMachineLayer = ({ waypoints }) => {
  const markerIcon = new L.Icon({
    iconUrl: markerIconImg,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  });

  const instance = L.Routing.control({
    waypoints: waypoints,
    createMarker: function (i, waypoint, n) {
      return L.marker(waypoint.latLng, {
        draggable: true,
        icon: markerIcon,
      });
    },

    show: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
