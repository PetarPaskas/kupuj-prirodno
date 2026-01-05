import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import L from "leaflet";
import { Marker, useMapEvents } from "react-leaflet";

const defaultMarkerIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});


interface LocationMarkerProps{
    position?: L.LatLng | null
    onSetPosition:(e:L.LatLng)=>void
}

const LocationPin = ({position, onSetPosition}:LocationMarkerProps)=>{

    useMapEvents({
        click: (e:L.LeafletMouseEvent)=>{onSetPosition(e.latlng);}
    });

    return position ? <Marker position={position} icon={defaultMarkerIcon} /> : null;
}

export default LocationPin;