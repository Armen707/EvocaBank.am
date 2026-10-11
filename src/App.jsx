import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
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
import Footer from './components/Footer';
import EvocaCards from './components/EvocaCards';
import Loans from './components/Loans';
import CreditHistory from './components/CreditHistory';
import ImportantInfo from './components/ImportantInfo';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header />
        
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
            <Route path="/cards" element={<EvocaCards />} />
            <Route path="/loans" element={<Loans />} />
            <Route path="/credit-history" element={<CreditHistory />} />
            <Route path="/important-info" element={<ImportantInfo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}