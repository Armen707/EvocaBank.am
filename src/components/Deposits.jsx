import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const depositsData = [
  {
    id: 1,
    title: "Դասական ավանդ",
    desc: "Ձեր անվտանգ ապագայի համար։ Ապահովեք ձեր ավելացրած ձեր խնայողությունները՝ ներդնելով Հայաստանում պահվող կարճ և երկար ժամկետներով ավանդներ։",
    minAmount: "100,000 ֏",
    term: "31-1,825 օր",
    rate: "10.5%",
    income: "100,000 ֏",
    incomeSub: "Նախնական հաշվեգրվող եկամուտ",
    image: "https://www.evoca.am/images-cache/deposits/1/1613390220029/415x261.jpg"
  },
  {
    id: 2,
    title: "Մանկական ավանդ",
    desc: "Ձեր երեխայի ապագա հոգսերի մասին մենք արդեն հոգացել ենք: Ներդրեք «Մանկական» ավանդը, «Մանկական» ավանդային հաշվին պարբերաբար գումարներ մուծելով՝ կուտակեք գումար ձեր երեխայի ապագայի համար:",
    minAmount: "100,000 ֏",
    term: "18 լուսնաձև",
    rate: "9.5%",
    income: "40,000 ֏",
    incomeSub: "Նախնական հաշվեգրվող եկամուտ",
    image: "https://www.evoca.am/images-cache/deposits/1/16133900414285/415x261.jpg"
  },
  {
    id: 3,
    title: "Ավանդ Evoca Online",
    desc: "Ցանկանո՞ւմ եք ներդրում անել բարձր տոկոսադրույքով, բայց չունե՞ք ժամանակ ճանապարհին EvocaONLINE հավելվածի միջոցով բացեք ավանդը, իսկ մենք դրանք փոխհատուցող պայմաններ թողնենք ձեզ համար.",
    minAmount: "100,000 ֏",
    term: "31-1,825 օր",
    rate: "10.75%",
    image: "https://www.evoca.am/images-cache/deposits/1/16133900122121/415x261.jpg"
  }
];

export default function DepositsSection() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-white min-h-screen text-gray-800 pb-16" style={{ fontFamily: "'Montserratarm-Medium', 'Helvetica', 'Arial', sans-serif" }}>
      
      {/* Վերևի Մանուշակագույն Ենթամենյու */}
      <div className="text-white py-3 px-6" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-7xl mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link 
            to="/deposits" 
            className={`pb-1 transition ${isActive('/deposits') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Ավանդներ
          </Link>
          <Link 
            to="/deposits-issuance" 
            className={`pb-1 transition ${isActive('/deposits-issuance') ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Կարևոր տեղեկատվության
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="text-base text-gray-400 mb-3">
          Անհատ <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Ավանդներ</span>
        </div>
        
        <h1 className="text-4xl sm:text-5xl font-black text-gray-900 mb-10">Ավանդներ</h1>

        {/* Ավանդների Ցուցակ */}
        <div className="space-y-6">
          {depositsData.map((deposit) => (
            <div 
              key={deposit.id} 
              className="bg-white border border-gray-100 rounded-3xl p-8 sm:p-10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row items-center justify-between gap-8"
            >
              {/* Նկար առանց հետևի ֆոնի */}
              <div className="w-full md:w-[380px] flex-shrink-0 flex items-center justify-center p-0 bg-transparent shadow-none">
                <img 
                  src={deposit.image} 
                  alt={deposit.title} 
                  className="w-full h-auto max-h-60 object-contain hover:scale-105 transition-transform duration-300" 
                />
              </div>

              {/* Բովանդակություն */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold text-gray-900 mb-3">{deposit.title}</h3>
                <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">{deposit.desc}</p>

                {/* Ցուցանիշներ */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-2">
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Գումար</div>
                    <div className="text-xl font-bold text-gray-900">{deposit.minAmount}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Ժամկետ</div>
                    <div className="text-xl font-bold text-gray-900">{deposit.term}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Տոկոսադրույք</div>
                    <div className="text-xl font-bold" style={{ color: '#6400dc' }}>{deposit.rate}</div>
                  </div>
                  {deposit.income && (
                    <div>
                      <div className="text-sm text-gray-400 mb-1">Եկամուտ</div>
                      <div className="text-xl font-bold text-gray-900">{deposit.income}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{deposit.incomeSub}</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Կոճակ */}
              <div className="w-full md:w-auto flex flex-col items-end justify-center self-stretch border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10">
                <button 
                  className="w-full md:w-auto px-8 py-3.5 rounded-2xl font-semibold text-base transition-colors duration-200 flex items-center justify-center space-x-2 shadow-sm"
                  style={{ backgroundColor: '#f3eeff', color: '#6400dc' }}
                >
                  <span>Մանրամասն</span>
                  <span>&gt;</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}