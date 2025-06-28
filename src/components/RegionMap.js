import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const regionCenters = [
    { name: "Antioquia", coords: [6.25184, -75.56359] },
    { name: "Caldas", coords: [5.07028, -75.51306] },
    { name: "Huila", coords: [2.53594, -75.52767] },
    // Agrega más regiones cafeteras aquí
];

function RegionMap() {
    return (
        <section id="regiones" style={{ padding: "2rem", textAlign: "center" }}>
            <h2>Regiones Cafeteras</h2>
            <MapContainer center={[4.5709, -74.2973]} zoom={6} style={{ height: "400px", width: "100%" }}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {regionCenters.map((region, idx) => (
                    <Marker key={idx} position={region.coords}>
                        <Popup>{region.name}</Popup>
                    </Marker>
                ))}
            </MapContainer>
            <p>Haz clic en los marcadores para ver las regiones cafeteras.</p>
        </section>
    );
}

export default RegionMap;