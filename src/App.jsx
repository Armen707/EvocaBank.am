import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import HeroSlider from './components/HeroSlider';
import BiometricAnimation from './components/BiometricAnimation';
import CardSwiper from './components/CardSwiper';
import EvocaDashboard from './components/EvocaDashboard';
import Calculator from './components/Calculator';

export default function App() {
  return (
    <Router>
       <div className="flex flex-col min-h-screen bg-gray-50">
        {/* Evocabank-ի մանուշակագույն ոճով վերնամաս */}
        <Header />
        <HeroSlider />
        <BiometricAnimation />
        <EvocaDashboard/>
        <CardSwiper />
        <Calculator/>
        {/* Էջերի դինամիկ փոխարկման հատված */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Այստեղ հետագայում կարող ենք ավելացնել այլ էջեր՝ /cards, /loans և այլն */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}