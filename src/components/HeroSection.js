import React from 'react';
import heroImage from '../assets/img/images3.jpg';

function HeroSection() {
    return (
        <section style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            color: '#fff',
            padding: '6rem 2rem',
            textAlign: 'center'
        }}>
            <h1>El Sabor de Colombia</h1>
            <p>Descubre la historia, tradición e innovación del café colombiano.</p>
        </section>
    );
}

export default HeroSection;