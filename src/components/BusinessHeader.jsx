import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, HelpCircle, Globe, Menu } from 'lucide-react';

export default function BusinessHeader() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* 1. Վերին շերտ */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center text-[13px] py-2 border-b text-gray-700">
        {/* Ձախ կողմ՝ Բաժիններ (Բիզնեսն է ընտրված) */}
        <div className="flex items-center gap-6 font-medium">
          <Link to="/" className="hover:text-purple-700 transition">
            Անհատ
          </Link>
          <Link to="/business-loans" className="text-purple-700 border-b-2 border-purple-700 pb-1 font-semibold">
            Բիզնես
          </Link>
          <Link to="/instant-payments" className="hover:text-purple-700 transition hidden md:inline">
            Ակնթարթային վճարումներ
          </Link>
          <Link to="/about" className="hover:text-purple-700 transition hidden lg:inline">
            Մեր մասին
          </Link>
          <Link to="/news" className="hover:text-purple-700 transition hidden lg:inline">
            Նորություններ
          </Link>
          <Link to="/blog" className="hover:text-purple-700 transition hidden xl:inline">
            Բլոգ
          </Link>
          <Link to="/career" className="hover:text-purple-700 transition hidden xl:inline">
            Կարիերա
          </Link>
        </div>

        {/* Աջ կողմ՝ Հղումներ և իկոնկաներ */}
        <div className="flex items-center gap-5">
          <span className="hover:text-purple-700 cursor-pointer font-medium flex items-center gap-1">
            Առցանց հայտեր <span className="text-[11px]">⌄</span>
          </span>
          <span className="hover:text-purple-700 cursor-pointer font-medium flex items-center gap-1">
            Հետադարձ կապ <span className="text-[11px]">⌄</span>
          </span>
          
          <div className="flex items-center gap-3.5 text-gray-800 pl-4 border-l">
            <MapPin size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <HelpCircle size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Globe size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Search size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Menu size={20} className="cursor-pointer hover:text-purple-700 transition md:hidden" />
          </div>
        </div>
      </div>

      {/* 2. Ստորին շերտ (Լոգո + Անհատի հիմնական մենյու) */}
      <div className="max-w-[1540px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        <Link to="/" className="text-4xl font-black tracking-tighter text-gray-800 flex items-center">
          evoca
        </Link>

        <nav className="hidden md:flex items-center lg:gap-8 xl:gap-10 font-medium text-gray-800 text-[15px]">
          <Link to="/loans" className="hover:text-purple-700 transition">Վարկեր</Link>
          <Link to="/cards" className="hover:text-purple-700 transition">Քարտեր</Link>
          <Link to="/deposits" className="hover:text-purple-700 transition">Ավանդներ</Link>
          <Link to="/accounts" className="hover:text-purple-700 transition">Հաշիվներ</Link>
          <Link to="/transfers" className="hover:text-purple-700 transition">Փոխանցումներ</Link>
          <Link to="/securities" className="hover:text-purple-700 transition hidden lg:inline">Արժեթղթեր</Link>
          <Link to="/salary" className="hover:text-purple-700 transition hidden xl:inline">EvocaSALARY</Link>
          <Link to="/touch" className="hover:text-purple-700 transition hidden xl:inline">EvocaTOUCH</Link>
        </nav>

        <button className="bg-[#6600cc] hover:bg-[#5500aa] text-white px-7 py-2 rounded-3xl font-bold text-sm tracking-wide shadow-md transition">
          EvocaONLINE
        </button>
      </div>

      {/* 3. Մանուշակագույն Ենթամենյու Բիզնեսի համար */}
      <div className="w-full text-white py-3 px-6 lg:px-12" style={{ backgroundColor: '#6400dc' }}>
        <div className="max-w-[1540px] mx-auto flex space-x-8 text-sm font-medium overflow-x-auto">
          <Link to="/business-loans" className={`pb-1 border-b-2 ${isActive('/business-loans') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Վարկեր
          </Link>
          <Link to="/business-leasing" className={`pb-1 border-b-2 ${isActive('/business-leasing') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Լիզինգ
          </Link>
          <Link to="/business-accounts" className={`pb-1 border-b-2 ${isActive('/business-accounts') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Հաշիվներ
          </Link>
          <Link to="/business-deposits" className={`pb-1 border-b-2 ${isActive('/business-deposits') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Ավանդներ
          </Link>
          <Link to="/business-securities" className={`pb-1 border-b-2 hidden lg:inline ${isActive('/business-securities') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Արժեթղթերի շուկա
          </Link>
          <Link to="/business-trade-finance" className={`pb-1 border-b-2 hidden xl:inline ${isActive('/business-trade-finance') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Առևտրի ֆինանսավորում
          </Link>
          <Link to="/business-digital" className={`pb-1 border-b-2 hidden xl:inline ${isActive('/business-digital') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Դիջիթալ
          </Link>
          <Link to="/business-other" className={`pb-1 border-b-2 hidden xl:inline ${isActive('/business-other') ? 'border-white font-bold' : 'border-transparent text-purple-200 hover:text-white'}`}>
            Այլ
          </Link>
        </div>
      </div>
    </header>
  );
}