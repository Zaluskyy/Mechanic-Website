import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";


export default function Map(){

    const center = [50.1711248300835, 23.120035971994117]
    
    return(
        <MapContainer
        center={center}
        zoom={17}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
    >
        <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} />
    </MapContainer>
    )
}