import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsCards from './components/StatsCards';
import RegionMap from './components/RegionMap';
import InnovationSection from './components/InnovationSection';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <StatsCards />
            <RegionMap />
            <InnovationSection />
            <Footer />
        </div>
    );
}

export default App;
