import L from "leaflet";
import { createControlComponent } from "@react-leaflet/core";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import markerIconImg from "../../assets/marker-icon.png";

const createRoutineMachineLayer = ({ waypoints, onRouteFound }) => {
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

    show: true,
    collapsible: true,
  });

  instance.on('routesfound', (event) => {
    const route = event.routes[0];
    const distance = route.summary.totalDistance;
    onRouteFound(distance);
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
