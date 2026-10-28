import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function InvestmentServices() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState(null);

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
            to="/brokerage" 
            className={`pb-1 transition ${isActive('/brokerage') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Պարտատոմսեր
          </Link>
          <Link 
            to="/custody-services" 
            className={`pb-1 transition ${isActive('/custody-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            ՀԿԴ ծառայություններ
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
          Անհատ <span className="mx-1">&gt;</span> Արժեթղթեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Ներդրումային ծառայություններ</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Ներդրումային ծառայություններ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Evocabank-ն առաջարկում է ներդրումային ծառայություններ և տալիս եկամտի նոր աղբյուրների հնարավորություն՝ ձեր պահանջներին և ցանկություններին համապատասխան։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16781890566687/780x585.jpg" 
              alt="Investment services banner" 
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
              Բանկն իր հաճախորդներին ներդրումային ծառայություններ է մատուցում ինչպես տեղական, այնպես էլ՝ միջազգային շուկաներում: Բանկի կողմից առաջարկվող ծառայությունները հասանելի են իրավաբանական և ֆիզիկական անձ հանդիսացող հաճախորդներին:
            </p>
            
            <div className="p-6 bg-gray-50 border border-gray-100 rounded-3xl space-y-3">
              <p className="font-bold text-lg text-gray-900">Ինչպե՞ս դառնալ հաճախորդ։</p>
              <p>
                Ներդրումային ծառայություններից օգտվելու համար անհրաժեշտ է Բանկում ունենալ ընթացիկ բանկային հաշիվ, որի բացման համար պահանջվող փաստաթղթերին կարող եք ծանոթանալ այստեղ:
              </p>
              <p>
                Բրոքերային հաշվի բացման համար անհրաժեշտ է այցելել Բանկի գլխամասային գրասենյակ։
              </p>
              <div className="pt-2 border-t border-gray-200 space-y-1 text-sm">
                <p><strong>Հասցե՝</strong> Երևան, Հանրապետության 44/2</p>
                <p><strong>Հետադարձ կապ՝</strong> Հեռ.՝ +374 33 777 453, +374 33 603 055</p>
                <p><strong>Էլ․ հասցե՝</strong> investsecurities@evoca.am</p>
              </div>
            </div>

            <div className="p-5 bg-red-50 border border-red-100 rounded-2xl text-red-900">
              <p className="font-bold mb-1">ՈՒՇԱԴՐՈՒԹՅՈՒՆ․</p>
              <p className="text-sm">
                Ֆինանսական շուկաներում գործարքների իրականացման հետ կապված ՌԻՍԿԸ ԿՐՈՒՄ Է ՀԱՃԱԽՈՐԴԸ: Բանկը ՉԻ ՓՈԽՀԱՏՈՒՑԵԼՈՒ հաճախորդի վնասները, եթե դրանք չեն պատճառվել Բանկի կողմից անբարեխիղճ վարքագծի արդյունքում։
              </p>
            </div>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          {/* 1. Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('brokerageRules')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Արժեթղթերի շուկայում Բրոքերային ծառայությունների մատուցման կանոններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'brokerageRules' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'brokerageRules' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>
                  Այս կանոնները սահմանում են մեր հաճախորդների կողմից մեզ ներկայացված արժեթղթերով գործարքների կնքման պատվերների ընդունման/հաղորդման, հաճախորդների հետ կապի իրականացման, հաճախորդների հաշվին արժեթղթերով գործարքների կատարման կարգն ու պայմանները, ինչպես նաև տրամադրում գործառնությունների իրականացման հետ կապված հնարավոր ռիսկերի վերաբերյալ ընդհանրական տեղեկություններ: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին, ՀՀ Կենտրոնական բանկի նորմատիվ և այլ իրավական ակտերին համապատասխան:
                </p>
              </div>
            )}
          </div>

          {/* 2. Արժեթղթերի Պահառության գործունեության կանոններ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('custodyRules')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Արժեթղթերի Պահառության գործունեության կանոններ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'custodyRules' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'custodyRules' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <p>
                  Այս կանոնները սահմանում են արժեթղթերի հաշիվների հետ կատարվող գործառնությունների ցանկը, ծառայությունների մատուցման/կատարման կարգն ու պայմանները, պահառության հետ կապված հարաբերությունները, ինչպես նաև պահառուի աշխատանքների կանոնները: Կանոնները մշակված են Հայաստանի քաղաքացիական օրենսգրքին, «Արժեթղթերի շուկայի մասին» ՀՀ օրենքին և պահառության գործունեությունը կանոնակարգող իրավական այլ ակտերին (այդ թվում` Հայաստանի կենտրոնական դեպոզիտարիայի կանոնների պահանջներին) համապատասխան:
                </p>
              </div>
            )}
          </div>

          {/* 3. Ծառայությունների մատուցման սակագներ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('tariffs')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Սակագներ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'tariffs' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'tariffs' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li><a href="#" className="text-[#6400dc] hover:underline font-semibold">Տեղական և Ռուսական շուկաներում ծառայությունների մատուցման սակագներ</a></li>
                  <li><a href="#" className="text-[#6400dc] hover:underline font-semibold">Միջազգային շուկաներում ծառայությունների մատուցման սակագներ</a></li>
                </ul>
              </div>
            )}
          </div>

          {/* 4. Լրացուցիչ տեղեկատվություն */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('otherInfo')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Լրացուցիչ տեղեկատվություն</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'otherInfo' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'otherInfo' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-3">
                <ul className="list-disc list-inside space-y-2">
                  <li>«Արժեթղթերով գործարքներ կնքելու նպատակով պատվերների ընդունման և կատարման» ընթացակարգ</li>
                  <li>«Շահերի բախման սահմանափակման» ընթացակարգ</li>
                  <li>Ֆոնդային բորսաներ</li>
                  <li>Տեղեկացումներ հնարավոր ռիսկերի վերաբերյալ</li>
                </ul>
              </div>
            )}
          </div>

        </div>

        {/* Վերջին նորությունները / Բլոկ նկարներով */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-black text-gray-900">Վերջին նորությունները</h2>
            <a href="#" className="text-sm font-semibold text-[#6400dc] hover:underline">Բոլոր նորությունները →</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17915391966329/439x320.png" alt="News 1" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-2">06.10.2026</p>
                <p className="font-bold text-gray-800 text-base">Evocabank-ը FinCom Armenia 2026-ի գլխավոր գործընկեր</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17912685600228/439x320.png" alt="News 2" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-2">06.10.2026</p>
                <p className="font-bold text-gray-800 text-base">Evocabank-ը TRF 2026-ի ֆինանսական գործընկեր</p>
              </div>
            </div>
            <div className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition">
              <img src="https://www.evoca.am/images-cache/news/1/17913736819959/439x320.jpg" alt="News 3" className="w-full h-48 object-cover" />
              <div className="p-6">
                <p className="text-xs text-gray-400 font-semibold mb-2">04.10.2026</p>
                <p className="font-bold text-gray-800 text-base">Evocabank-ը Armenia-UK Business Forum-ի գլխավոր գործընկեր</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}