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
import IssuanceAndService from './components/IssuanceAndService';
import SocialCards from './components/SocialCards';
import Deposits from './components/Deposits';
import DepositsIssuance from './components/DepositsIssuance';
import EvocaSavingsAccount from './components/EvocaSavingsAccount';
import NonResidentService from './components/NonResidentService';
import UnallocatedMetalAccounts from './components/UnallocatedMetalAccounts';
import NonResidentRemoteService from './components/NonResidentRemoteService';
import MoneyTransfers from './components/MoneyTransfers';
import PaymentSystems from './components/PaymentSystems';
import InvestmentServices from './components/InvestmentServices';
import Bonds from './components/Bonds';
import CentralDepositoryServices from './components/CentralDepositoryServices';
import RepoTransactions from './components/RepoTransactions';
import EvocaInvest from './components/EvocaInvest';
import SalaryProject from './components/SalaryProject';
import EvocaTouch from './components/EvocaTouch';
import BusinessLoans from './components/BusinessLoans';


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
            <Route path="/issuance" element={<IssuanceAndService />} />
            <Route path="/social-cards" element={<SocialCards />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/deposits-issuance" element={<DepositsIssuance />} />
            <Route path="/accounts" element={<EvocaSavingsAccount />} />
            <Route path="/savings-account" element={<EvocaSavingsAccount />} />
            <Route path="/savings-issuance" element={<NonResidentService />} />
            <Route path="/maximum-service-accounts" element={<UnallocatedMetalAccounts />} />
            <Route path="/non-resident-service" element={<NonResidentRemoteService />} />
            <Route path="/savings-tariffs" element={<UnallocatedMetalAccounts />} />
            <Route path="/savings-features" element={<NonResidentRemoteService />} />
            <Route path="/transfers" element={<MoneyTransfers />} />
            <Route path="/money-transfers" element={<MoneyTransfers />} />
            <Route path="/payment-systems" element={<PaymentSystems />} />
            <Route path="/transfers/money-transfers" element={<MoneyTransfers />} />
            <Route path="/investment-services" element={<InvestmentServices />} />
            <Route path="/securities" element={<InvestmentServices />} />
            <Route path="/brokerage" element={<Bonds />} />
            <Route path="/custody-services" element={<CentralDepositoryServices />} />
            <Route path="/bonds" element={<Bonds />} />
            <Route path="/investment-other-services" element={<RepoTransactions />} />
            <Route path="/evocainvest" element={<EvocaInvest />} />
            <Route path="/salary" element={<SalaryProject />} />
            <Route path="/touch" element={<EvocaTouch />} />
            <Route path="/business-loans" element={<BusinessLoans />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}