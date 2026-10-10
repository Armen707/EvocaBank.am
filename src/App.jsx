import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HeroSlider from './components/HeroSlider';
import BiometricAnimation from './components/BiometricAnimation';
import CardSwiper from './components/CardSwiper';
import EvocaDashboard from './components/EvocaDashboard';
import Calculator from './components/Calculator';
import EvocaHero from './components/EvocaHero';
import EvocaPartners from './components/EvocaPartners';
import LatestNews from './components/LatestNews';
import CurrencyExchangeSection from './components/CurrencyExchangeSection';
import TestimonialsSlider from './components/TestimonialsSlider';
import Loans from './components/Loans'; // <-- Ներմուծեցինք Վարկերի բաղադրիչը
import Footer from './components/Footer';
import CreditHistory from './components/CreditHistory';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Header-ը միշտ կլինի բոլոր էջերի վերևում */}
        <Header />
        
        {/* Մնացած էջերն ու բովանդակությունը կփոխվեն այստեղ */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={
              <>
                <HeroSlider />
                <BiometricAnimation />
                <EvocaDashboard />
                <CardSwiper />
                <Calculator />
                <EvocaHero />
                <EvocaPartners />
                <LatestNews />
                <CurrencyExchangeSection />
                <TestimonialsSlider />
              </>
            } />
            
            {/* Վարկերի էջը */}
            <Route path="/loans" element={<Loans />} />
            <Route path="/credit-history" element={<CreditHistory />} />
          </Routes>
        </main>

        {/* Footer-ը միշտ կլինի բոլոր էջերի ներքևում՝ առանց դատարկ տեղերի */}
        <Footer />
      </div>
    </Router>
  );
}