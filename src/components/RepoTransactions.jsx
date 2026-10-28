import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function RepoTransactions() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
            className={`pb-1 transition ${isActive('/investment-other-services') || true ? 'border-b-2 border-white font-bold' : 'opacity-80 hover:opacity-100'}`}
          >
            Արժեթղթերի շուկայի գործիքներ
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
          Անհատ <span className="mx-1">&gt;</span> Արժեթղթեր <span className="mx-1">&gt;</span> <span className="text-gray-700 font-semibold">Ռեպո/Հակադարձ Ռեպո գործարքներ</span>
        </div>

        {/* Հիմնական բաններ բլոկ և վերնագիր */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-10">
          <div className="md:w-1/2 py-6 pr-4">
            <h1 className="text-4xl sm:text-5xl font-black mb-4 leading-tight text-gray-900">
              Ռեպո/Հակադարձ Ռեպո գործարքներ
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Կարճաժամկետ դրամական միջոցներ ներգրավելու և տեղաբաշխելու նպատակով Evocabank-ն իրականացնում է Ռեպո/Հակադարձ Ռեպո գործարքներ։ Ռեպո/Հակադարձ Ռեպո գործարքների շնորհիվ՝ Բանկը կատարում է կարճաժամկետ իրացվելիության կառավարում։
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img 
              src="https://www.evoca.am/images-cache/menu/1/16783548886405/780x585.jpg" 
              alt="Repo transactions banner" 
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
              Բանկը Ռեպո/Հակադարձ Ռեպո գործարքներ է կնքում բացառապես Հայաստանի Հանրապետության Կենտրոնական բանկի կողմից գրանցված և լիցենզավորված, մասնագիտացված ընկերությունների հետ (Բանկեր, Ներդրումային ընկերություններ, Ներդրումային ֆոնդեր, Վարկային կազմակերպություններ, Ապահովագրական ընկերություններ):
            </p>
            <p>
              Գործարքները կնքվում են ՀՀ պետական գանձապետական և ԿԲ-ի կողմից թողարկված պարտատոմսերով, ինչպես նաև ՀՀ առևտրային բանկերի, վարկային կազմակերպությունների կողմից թողարկված և Հայաստանի Ֆոնդային Բորսայում ցուցակված այլ կորպորատիվ պարտատոմսերով:
            </p>
            <p className="font-semibold text-gray-900">
              Գործարքի հիմնական պայմանները որոշվում են երկկողմ բանակցությունների արդյունքում:
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}