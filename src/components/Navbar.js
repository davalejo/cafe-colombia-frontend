import React from 'react';

function Navbar() {
    return (
        <nav style={{ background: '#6f4e37', padding: '1rem' }}>
            <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
                <li style={{ marginRight: '2rem' }}><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Inicio</a></li>
                <li style={{ marginRight: '2rem' }}><a href="#regiones" style={{ color: '#fff', textDecoration: 'none' }}>Regiones</a></li>
                <li style={{ marginRight: '2rem' }}><a href="#innovacion" style={{ color: '#fff', textDecoration: 'none' }}>Innovación</a></li>
                <li><a href="#contacto" style={{ color: '#fff', textDecoration: 'none' }}>Contacto</a></li>
            </ul>
        </nav>
    );
}

export default Navbar;