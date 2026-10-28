import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CentralDepositoryServices() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('rules');

  const isActive = (path) => location.pathname === path;

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/investment-services" 
            className={`pb-1 transition ${isActive('/investment-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ներդրումային ծառայություններ
          </Link>
          <Link 
            to="/bonds" 
            className={`pb-1 transition ${isActive('/bonds') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Պարտատոմսեր
          </Link>
          <Link 
            to="/custody-services" 
            className={`pb-1 transition ${isActive('/custody-services') || true ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Պահառության ծառայություններ
          </Link>
          <Link 
            to="/investment-other-services" 
            className={`pb-1 transition ${isActive('/investment-other-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ռեփո/Հակադարձ գործիքներ
          </Link>
          <Link 
            to="/evocainvest" 
            className={`pb-1 transition ${isActive('/evocainvest') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            EvocaINVEST
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Արժեթղթեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Հայաստանի կենտրոնական դեպոզիտարիա (ՀԿԴ)</span>
        </div>

        {/* Վերնագիր և բաններ նկար */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-10">
          <div className="md:w-1/2 py-4 pr-6">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 leading-tight text-gray-900">
              Հայաստանի կենտրոնական դեպոզիտարիայի (ՀԿԴ) ծառայություններ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Evocabank-ը հանդիսանում է ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր՝ միջնորդավորելով ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ռեեստրավարման և արժեթղթերի պահառության հետ կապված բոլոր ծառայությունները:
            </p>
          </div>
          
          {/* Նկարը տեքստից հետո (աջ կողմում) */}
          <div className="md:w-1/2 flex justify-end w-full">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783474498811/780x585.jpg" 
              alt="Central Depository Services banner" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>

        {/* Սոց. նշաններ և հիմնական տեքստ */}
        <div className="flex gap-6 mb-12">
          <div className="hidden sm:flex flex-col space-y-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              ՀՀ Կենտրոնական Դեպոզիտարիան հաճախորդների սպասարկումը իրականացնում է բացառապես Հաշվի Օպերատորների միջնորդությամբ:
            </p>
            <p>
              Հաշվի Օպերատորը ՀՀ Կենտրոնական Դեպոզիտարիայի հետ կնքած պայմանագրի հիման վրա միջնորդավորում է ՀՀ Կենտրոնական Դեպոզիտարիայի կողմից մատուցվող ծառայությունները:
            </p>
            <p>
              Evocabank-ը, որպես ՀՀ Կենտրոնական Դեպոզիտարիայի Հաշվի Օպերատոր և կարգավորվող շուկայի հաշվարկային համակարգի անդամ (ԿՇՀՀԱ), մատուցում է ռեեստրավարման և պահառության ծառայություններ՝ ապահովելով դրանց մատուցումը ինչպես Բանկի Գլխամասային գրասենյակում, այնպես էլ՝ մասնաճյուղերում։
            </p>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('rules')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Ծառայությունների սակագներ և կանոններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'rules' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'rules' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><a href="#" className="text-[#6400dc] hover:underline font-semibold">Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության սակագներ</a></li>
                  <li><a href="#" className="text-[#6400dc] hover:underline font-semibold">Հայաստանի կենտրոնական դեպոզիտարիայի կողմից մատուցվող ծառայությունների միջնորդավորման գործունեության կանոններ</a></li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Վերջին նորությունները */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black text-gray-900">Վերջին նորությունները</h2>
            <a href="#" className="text-sm font-semibold text-[#6400dc] hover:underline">Բոլոր նորությունները →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ FinComm Armenia 2026-ի գլխավոր գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">08.10.2026</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ TRF 2026-ի ֆինանսական գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">06.10.2026</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-1">Կենսակերպ</p>
                <p className="font-bold text-gray-800 text-base mb-2">Evocabank-ը՝ Armenia-UK Business Forum-ի գլխավոր գործընկեր</p>
                <p className="text-xs text-gray-400 font-semibold">06.10.2026</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}