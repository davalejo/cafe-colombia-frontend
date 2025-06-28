import React from 'react';

const tipos = [
    { nombre: "Arabica", descripcion: "Suave, aromático y con menor cafeína." },
    { nombre: "Robusta", descripcion: "Más fuerte, amargo y con más cafeína." },
    // Agrega más tipos si deseas
];

function TiposCafe() {
    return (
        <section id="tipos-cafe" style={{ padding: "2rem", background: "#f7f3ee" }}>
            <h2>Tipos de Café Colombiano</h2>
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center" }}>
                {tipos.map((tipo, idx) => (
                    <div key={idx} style={{ background: "#fff", padding: "1rem", borderRadius: "8px", boxShadow: "0 2px 8px rgba(0,0,0,0.07)" }}>
                        <h3>{tipo.nombre}</h3>
                        <p>{tipo.descripcion}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TiposCafe;