import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Bonds() {
  const location = useLocation();
  const [openSection, setOpenSection] = useState('bonds-table');

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
            className={`pb-1 transition ${isActive('/custody-services') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
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
          Անհատ <span className="mx-1">&gt;</span> Արժեթղթեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Պարտատոմսեր</span>
        </div>

        {/* Հիմնական բաններ բլոկ */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Պարտատոմսեր
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Evocabank-ը հնարավորություն է տալիս ձեռք բերել պարտատոմսեր և ստանալ բարձր եկամուտներ։ Մենք ցանկանում ենք դառնալ Ձեր բարեկեցիկ ապագայի մի մասնիկը։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783548543339/780x585.jpg" 
              alt="Bonds banner" 
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
              Առաջին անգամ հայաստանյան ֆինանսական համակարգում Evocabank-ը, որպես նորարար և ժամանակակից Բանկ, իրականացրել է իր կողմից թողարկված պարտատոմսերի օնլայն տեղաբաշխում՝ EvocaTOUCH հավելվածի միջոցով։
            </p>
            <p>
              Պարտատոմսերը պահանջված և բարձր եկամտաբեր ֆինանսական գործիքներ են: Դրանք ապահով են և ունեն մի շարք առավելություններ՝
            </p>
            
            <ul className="list-disc list-inside space-y-3">
              <li>Անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ և ՀՀ օրենսդրությամբ սահմանված չափերով երաշխավորված են «Ավանդների հատուցումը երաշխավորող հիմնադրամ»-ի կողմից:</li>
              <li>ՀՀ Ֆոնդային Բորսայում ցուցակված պարտատոմսերից ստացված եկամուտները ազատվում են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից՝ ապահովելով ավելի բարձր եկամտաբերություն:</li>
            </ul>
          </div>
        </div>

        {/* Անհրաժեշտ տեղեկատվություն (Ակորդեոններ) */}
        <h2 className="text-3xl font-black text-gray-900 mb-6">ԱՆՀՐԱԺԵՇՏ ՏԵՂԵԿԱՏՎՈՒԹՅՈՒՆ</h2>
        <div className="space-y-4 mb-12">
          
          {/* 1. Թողարկված պարտատոմսերի պայմաններ */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('bonds-table')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>ԹՈՂԱՐԿՎԱԾ ՊԱՐՏԱՏՈՄՍԵՐԻ ՊԱՅՄԱՆՆԵՐ</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'bonds-table' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'bonds-table' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-6 overflow-x-auto">
                
                {/* Թողարկում 1 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Թողարկում (Գրանցված է ՀՀ ԿԲ նախագահի 03.07.2024թ-ի թիվ 1/254Ա որոշմամբ)</h3>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b"><td className="py-2 font-semibold">Դաս</td><td className="py-2">Անվանական արժեկտրոնային</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Անվանական արժեք</td><td className="py-2">10,000 ՀՀ դրամ / 100 ԱՄՆ դոլար</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Ընդհանուր ծավալ</td><td className="py-2">3,000,000,000 ՀՀ դրամ / 15,000,000 ԱՄՆ դոլար</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Թողարկվող պարտատոմսերի քանակ</td><td className="py-2">300,000 հատ / 150,000 հատ</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Շրջանառության ժամկետ</td><td className="py-2">36 ամիս</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="py-2">10% (դրամ) / 5% (դոլար)</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնների վճարման պարբերականություն</td><td className="py-2">Եռամսյակային</td></tr>
                      <tr><td className="py-2 font-semibold">Տեղաբաշխող</td><td className="py-2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Թողարկում 2 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Թողարկում (Գրանցված է ՀՀ ԿԲ նախագահի 07.03.2023թ-ի թիվ 1/87Ա որոշմամբ)</h3>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b"><td className="py-2 font-semibold">Դաս</td><td className="py-2">Անվանական արժեկտրոնային</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Անվանական արժեք</td><td className="py-2">10,000 ՀՀ դրամ / 100 ԱՄՆ դոլար / 100 Եվրո</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Ընդհանուր ծավալ</td><td className="py-2">2,000,000,000 ՀՀ դրամ / 10,000,000 ԱՄՆ դոլար / 7,000,000 Եվրո</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Թողարկվող պարտատոմսերի քանակ</td><td className="py-2">200,000 հատ / 100,000 հատ / 70,000 հատ</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Շրջանառության ժամկետ</td><td className="py-2">30-39 ամիս</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="py-2">11% (դրամ) / 5.25% (դոլար) / 4% (եվրո)</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնների վճարման պարբերականություն</td><td className="py-2">Եռամսյակային</td></tr>
                      <tr><td className="py-2 font-semibold">Տեղաբաշխող</td><td className="py-2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                    </tbody>
                  </table>
                </div>

                {/* Թողարկում 3 */}
                <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                  <h3 className="font-bold text-lg text-gray-900 mb-4">Թողարկում (Գրանցված է ՀՀ ԿԲ նախագահի 11.03.2022թ. թիվ 1/106 Ա որոշմամբ)</h3>
                  <table className="w-full text-left border-collapse">
                    <tbody>
                      <tr className="border-b"><td className="py-2 font-semibold">Դաս</td><td className="py-2">Անվանական արժեկտրոնային</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Անվանական արժեք</td><td className="py-2">10,000 ՀՀ դրամ / 100 ԱՄՆ դոլար</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Ընդհանուր ծավալ</td><td className="py-2">2,000,000,000 ՀՀ դրամ / 10,000,000 ԱՄՆ դոլար</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Թողարկվող պարտատոմսերի քանակ</td><td className="py-2">200,000 հատ / 100,000 հատ</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Շրջանառության ժամկետ</td><td className="py-2">30 ամիս</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնային տարեկան տոկոսադրույք</td><td className="py-2">11% (դրամ) / 5% (դոլար)</td></tr>
                      <tr className="border-b"><td className="py-2 font-semibold">Արժեկտրոնների վճարման պարբերականություն</td><td className="py-2">Եռամսյակային</td></tr>
                      <tr><td className="py-2 font-semibold">Տեղաբաշխող</td><td className="py-2">«Էվոկաբանկ» ԲԲԸ</td></tr>
                    </tbody>
                  </table>
                </div>

                <p className="text-sm text-gray-500">Պարտատոմսերի թողարկման մանրամասներին կարող եք ծանոթանալ <a href="#" className="text-[#6400dc] underline font-semibold">այստեղ</a>:</p>
              </div>
            )}
          </div>

          {/* 2. Հաճախ տրվող հարցեր պարտատոմսերի մասին */}
          <div className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm">
            <button 
              onClick={() => toggleSection('faq')}
              className="w-full flex items-center justify-between p-6 bg-white hover:bg-gray-50 transition text-left font-bold text-xl text-gray-900"
            >
              <span>Հաճախ տրվող հարցեր պարտատոմսերի մասին</span>
              <span className="text-xl" style={{ color: '#6400dc' }}>{openSection === 'faq' ? '▲' : '▼'}</span>
            </button>
            {openSection === 'faq' && (
              <div className="p-8 bg-gray-50/50 border-t border-gray-100 text-base text-gray-700 space-y-6">
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Ի՞նչ է պարտատոմսը:</p>
                  <p>Պարտատոմսը (լատիներեն՝ obligation - պարտավորություն) պարտքային արժեթուղթ է, որը հավաստում է դրա տիրապետողի իրավունքը՝ դրանում նշված ժամկետում պարտատոմս թողարկած անձից ստանալ պարտատոմսի անվանական արժեքը, ինչպես նաև տոկոս։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Ի՞նչ կլինի, եթե պարտատոմսերում ներդրված գումարն ինձ անհրաժեշտ լինի մինչև մարման ժամկետը:</p>
                  <p>Evocabank-ի կողմից թողարկված պարտատոմսերը ցուցակվելու են Հայաստանի ֆոնդային բորսայում, և Դուք ցանկացած պահի կարող եք գնել կամ վաճառել դրանք։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Ինչու՞ պետք է գնեմ պարտատոմսեր՝ ավանդ ներդնելու փոխարեն:</p>
                  <p>Պարտատոմսեր գնելն է՛լ ավելի շահավետ է և հարմար։ Պարտատոմսերն ունեն մի շարք առավելություններ. ստացված եկամուտները ազատված են եկամտային հարկից և ոչ ռեզիդենտի շահութահարկից, իսկ վաճառելու դեպքում պահպանում եք մինչ այդ պահը կուտակված տոկոսագումարները։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Իմ ավանդները երաշխավորված են ավանդների հատուցումը երաշխավորող հիմնադրամի կողմից, իսկ պարտատոմսե՞րը:</p>
                  <p>Պարտատոմսերը ևս երաշխավորված են։ Համաձայն ՀՀ օրենքի՝ Բանկի կողմից թողարկված անվանական պարտատոմսերով ներգրավված դրամական միջոցները համարվում են երաշխավորված բանկային ավանդ։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Ինչպե՞ս կարող եմ գնել Evocabank-ի պարտատոմսեր:</p>
                  <p>Պարտատոմսեր գնելու համար անհրաժեշտ է մոտենալ Բանկի ցանկացած գրասենյակ կամ կատարել գործողությունը online տարբերակով՝ աշխարհի ցանկացած վայրից, օրվա ցանկացած ժամին։</p>
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">❓ Կարող եմ արդյո՞ք անհրաժեշտության դեպքում պարտատոմսերի գրավով վարկ վերցնել:</p>
                  <p>Այո, կարող եք: Ինչպես և ավանդի դեպքում, պարտատոմսերի դեպքում ևս կարելի է ստանալ կարճաժամկետ վարկ՝ պարտատոմսի արժեկտրոնային տոկոսադրույք +2% պայմաններով։</p>
                </div>
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
              <span>Ծրագրային ազդագիր և պայմաններ</span>
            </a>
            <a href="#" className="flex items-center space-x-4 p-5 bg-gray-50 border border-gray-100 rounded-2xl hover:bg-gray-100 transition text-base font-semibold text-gray-800">
              <span className="text-xl text-[#6400dc]">📄</span>
              <span>Տեղեկատվական ամփոփագիր (Պարտատոմսեր)</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}