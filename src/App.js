import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCards from './components/StatsCards';
import RegionMap from './components/RegionMap';
import InnovationSection from './components/InnovationSection';
import Footer from './components/Footer';
import TiposCafe from './components/TiposCafe';
import TipsCafe from './components/TipsCafe';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <StatsCards />
            <RegionMap />
            <TiposCafe />
            <TipsCafe />
            <InnovationSection />
            <Footer />
        </div>
    );
}

export default App;
