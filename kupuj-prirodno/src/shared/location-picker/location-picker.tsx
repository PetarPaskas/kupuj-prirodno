import "leaflet/dist/leaflet.css";

import L from "leaflet"
import { MapContainer, TileLayer } from "react-leaflet";
import { useEffect, useState } from "react";
import LocationPin from "./location-pin";

export type Coordinates = {
  lat: number;
  lng: number;
};

export const defaultCenter: Coordinates = {
  lat: 44.7866, // Belgrade
  lng: 20.4489,
};

export interface LocationPickerProps {
  initialPosition?: Coordinates;
  onLocationChange: (coordinates: Coordinates) => void;
  className?:string
}

const LocationPicker = ({ 
    onLocationChange, 
    initialPosition=defaultCenter, 
    className="" }: LocationPickerProps) => {
  const [position, setPosition] = useState<L.LatLng | null>(null);

  useEffect(()=>{
      onLocationChange(position ? { lat: position.lat, lng: position.lng } : {lat:0, lng:0});
  },[position])

  const clearLocation = ()=>{
    setPosition(null);
  }
  const handleSetPosition = (position: L.LatLng)=>{
    setPosition(position);
  }

  return (
    <div className={className}>
        <MapContainer
            center={initialPosition}
            zoom={13}
            style={{ height: "200px", width: "100%" }}
            >
            <TileLayer
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                attribution="&copy; CartoDB"
                />
            <LocationPin position={position} onSetPosition={handleSetPosition}/>
        </MapContainer>
        <button style={{visibility: position ? 'visible' : 'hidden'}} onClick={clearLocation}>Clear selection</button>
    </div>
  );
};

export default LocationPicker;
