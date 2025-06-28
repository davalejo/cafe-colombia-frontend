import React from 'react';

const tips = [
    "Usa agua filtrada para preparar el café.",
    "Muele el café justo antes de prepararlo.",
    "Almacena el café en un recipiente hermético y en un lugar fresco.",
    // Agrega más tips si deseas
];

function TipsCafe() {
    return (
        <section id="tips-cafe" style={{ padding: "2rem" }}>
            <h2>Tips para Disfrutar tu Café</h2>
            <ul>
                {tips.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                ))}
            </ul>
        </section>
    );
}

export default TipsCafe;