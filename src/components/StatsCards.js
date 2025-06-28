import React from 'react';

const stats = [
    { label: 'Regiones Cafeteras', value: 23 },
    { label: 'Productores', value: '560.000+' },
    { label: 'Exportaciones/año', value: '13M sacos' },
    { label: 'Premios Internacionales', value: 45 }
];

function StatsCards() {
    return (
        <section style={{ display: 'flex', justifyContent: 'space-around', padding: '2rem 0', background: '#f7f3ee' }}>
            {stats.map((stat, idx) => (
                <div key={idx} style={{
                    background: '#fff',
                    borderRadius: '12px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                    padding: '1.5rem 2rem',
                    textAlign: 'center',
                    minWidth: '150px'
                }}>
                    <h2 style={{ color: '#6f4e37' }}>{stat.value}</h2>
                    <p>{stat.label}</p>
                </div>
            ))}
        </section>
    );
}

export default StatsCards;