import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function AccountOpeningService() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('docs');

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
            to="/savings-account" 
            className={`pb-1 transition ${isActive('/savings-account') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Evoca խնայողական հաշիվ
          </Link>
          <Link 
            to="/account-opening-service" 
            className={`pb-1 transition ${isActive('/account-opening-service') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Հաշիվների բացում և սպասարկում
          </Link>
          <Link 
            to="/maximum-service-accounts" 
            className={`pb-1 transition ${isActive('/maximum-service-accounts') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Առավելագույն մետաղական հաշիվներ
          </Link>
          <Link 
            to="/non-resident-service" 
            className={`pb-1 transition ${isActive('/non-resident-service') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ոչ ռեզիդենտ հաճախորդների հետագա սպասարկում
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> Հաշիվներ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Հաշիվների բացում և սպասարկում</span>
        </div>

        {/* Հիմնական բաններ բլոկ՝ երկրորդ նկարով (16111691720299) */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Հաշիվների բացում և սպասարկում
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Առաջարկում ենք բացել դրամային և արտարժութային ընթացիկ հաշիվներ, որոնց սպասարկումն իրականացնում ենք մեր սահմանած հաշվերով։ Մեզ մոտ հաշիվներ կարող ենք բացել Հայաստանի ռեզիդենտների և ոչ ռեզիդենտ ֆիզիկական անձանց։
            </p>
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl">
              <p className="font-bold text-base text-gray-900">
                Հաշիվներ բացելու նպատակով կարող եք դիմել մեր Գլխամասային գրասենյակ կամ ցանկացած մասնաճյուղ (բացառությամբ «Էրեբունի»-ի):
              </p>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16111691720299/780x585.jpg" 
              alt="Account opening service banner" 
              className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-sm"
            />
          </div>
        </div>

        {/* Սոց. նշաններ և հիմնական տեքստ */}
        <div className="flex gap-6 mb-12">
          <div className="hidden sm:flex flex-col space-y-3 pt-1">
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">f</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">in</a>
            <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-[#6400dc] hover:text-white transition">✉</a>
          </div>

          <div className="flex-1 space-y-6 text-base text-gray-700 leading-relaxed">
            <p>
              Մեր և Ձեր պայմանագրային փոխհարաբերությունները կարգավորվում են <strong>ՀԱՄԱԼԻՐ ԲԱՆԿԱՅԻՆ ԾԱՌԱՅՈՒԹՅՈՒՆՆԵՐԻ ՄԱՏՈՒՑՄԱՆ ՊԱՅԱՆՆԵՐՈՎ</strong>, որը հրապարակային առաջարկ (օֆերտա) է և Ձեր կողմից համարվում է ընդունված այն պահից, երբ առձեռն կամ հեռակառավարման համակարգերի միջոցով մեզ եք ներկայացնում պատշաճ լրացված և վավերացված բանկային ծառայություններից օգտվելու հայտ/դիմում: Համալիր բանկային ծառայությունների մատուցման պայմաններին կարող եք ծանոթանալ այստեղ:
            </p>

            {/* Առաջին նկարը (16111710051163) տեքստի մեջ */}
            <div className="w-300 -left-200 my-6 overflow-hidden shadow-md">
              <img 
                src="https://www.evoca.am/images-cache/menu/1/16111710051163/1920x530.jpg" 
                alt="Office interior" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('docs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Անհրաժեշտ փաստաթղթեր</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'docs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'docs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>Հաշվի բացման դիմում՝ մեր ձևանմուշի համաձայն։</li>
                  <li>Անձնագիր և սոցիալական քարտ կամ անձնագրում առկա տեղեկանք, կամ միայն նույնականացման քարտ։</li>
                  <li>Մեր պահանջով այլ փաստաթղթեր։</li>
                </ul>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('process')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաշիվ բացելու ընթացակարգը</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'process' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'process' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Հաշիվները բացվում են հաճախորդի անձնական ներկայությամբ կամ օրենսդրությամբ սահմանված կարգով ներկայացված դիմումի հիման վրա։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('service')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Բանկային հաշիվների սպասարկում</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'service' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'service' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Հաշիվների սպասարկումն իրականացնում են մեր գլխամասային գրասենյակը և մասնաճյուղերը: Հաշիվները սպասարկում ենք մեր սահմանած գործառնական օրվա ընթացքում՝ ժամը 9:30-17:00-ը, առանց ընդմիջման։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('terms')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաշիվների պայմանագրերի անվճար այլ դրույթներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'terms' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'terms' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Հաշվի վարման և բացման սպասարկումն անվճար են: Հաշվի չնվազող մնացորդի պահանջ սահմանված չէ:</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('closing')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաշիվների պայմանագրի լուծման պայմաններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'closing' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'closing' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Հաշվի պայմանագիրը կարող է լուծվել հաճախորդի դիմումով կամ բանկի նախաձեռնությամբ՝ օրենսդրությամբ սահմանված կարգով։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('guarantee')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Երաշխավորված ավանդների սահմանաչափերը</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'guarantee' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'guarantee' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Ֆիզիկական անձանց բանկային հաշիվների վրա գտնվող միջոցները երաշխավորված են ՀՀ օրենքով։</p>
              </div>
            )}
          </div>

          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('notice')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Ուշադրություն</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'notice' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'notice' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>Ձեր հաշիվների սպասարկման պայմաններին և սակագներին կարող եք ծանոթանալ բանկի պաշտոնական կայքում։</p>
              </div>
            )}
          </div>

        </div>

        {/* Փաստաթղթեր */}
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-6">Փաստաթղթեր</h2>
          <div className="space-y-4">
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Տեղեկատվական ամփոփագիր (Բանկային հաշիվներ) 09.06.2026</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Բանկային հաշիվների բացման և սպասարկման պայմաններ 01.09.2026թ.</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}