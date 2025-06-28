import React from 'react';
import regionMap from '../assets/img/images6.jpg';

function RegionMap() {
    return (
        <section id="regiones" style={{ padding: '2rem', textAlign: 'center' }}>
            <h2>Regiones Cafeteras</h2>
            <img src={regionMap} alt="Mapa de regiones cafeteras" style={{ maxWidth: '100%', borderRadius: '8px' }} />
            <p>Explora las principales zonas productoras de café en Colombia.</p>
        </section>
    );
}

export default RegionMap;