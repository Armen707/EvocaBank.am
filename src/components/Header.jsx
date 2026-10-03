import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, HelpCircle, Globe, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* 1. Վերին շերտ (1px մեծացված և մգացված տեքստերով) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center text-[13px] py-2 border-b text-gray-700">
        {/* Ձախ կողմի բաժիններ */}
        <div className="flex items-center gap-6 font-medium ">
          <span className="text-purple-700 border-b-2 border-purple-700 pb-1 cursor-pointer font-semibold">Անհատ</span>
          <span className="hover:text-purple-700 cursor-pointer transition">Բիզնես</span>
          <span className="hover:text-purple-700 cursor-pointer transition hidden md:inline">Ակնթարթային վճարումներ</span>
          <span className="hover:text-purple-700 cursor-pointer transition hidden lg:inline">Մեր մասին</span>
          <span className="hover:text-purple-700 cursor-pointer transition hidden lg:inline">Նորություններ</span>
          <span className="hover:text-purple-700 cursor-pointer transition hidden xl:inline">Բլոգ</span>
          <span className="hover:text-purple-700 cursor-pointer transition hidden xl:inline">Կարիերա</span>
        </div>

        {/* Աջ կողմի հղումներ և իկոնկաներ */}
        <div className="flex items-center gap-5">
          <span className="hover:text-purple-700 cursor-pointer font-medium flex items-center gap-1">Առցանց հայտեր <span className="text-[11px]">⌄</span></span>
          <span className="hover:text-purple-700 cursor-pointer font-medium flex items-center gap-1">Հետադարձ կապ <span className="text-[11px]">⌄</span></span>
          
          <div className="flex items-center gap-3.5 text-gray-800 pl-4 border-l">
            <MapPin size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <HelpCircle size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Globe size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Search size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Menu size={20} className="cursor-pointer hover:text-purple-700 transition md:hidden" />
          </div>
        </div>
      </div>

      {/* 2. Ստորին շերտ */}
      <div className="max-w-[1540px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Լոգո */}
        <Link to="/" className="text-4xl font-black tracking-tighter text-gray-800 flex items-center">
          evoca
        </Link>

        {/* Նավիգացիա */}
        <nav className="hidden md:flex items-center lg:gap-10 xl:gap-12 font-medium text-gray-800 text-[15px]">
          <Link to="/loans" className="hover:text-purple-700 transition">Վարկեր</Link>
          <Link to="/cards" className="hover:text-purple-700 transition">Քարտեր</Link>
          <Link to="/deposits" className="hover:text-purple-700 transition">Ավանդներ</Link>
          <Link to="/accounts" className="hover:text-purple-700 transition">Հաշիվներ</Link>
          <Link to="/transfers" className="hover:text-purple-700 transition">Փոխանցումներ</Link>
          <Link to="/securities" className="hover:text-purple-700 transition hidden lg:inline">Արժեթղթեր</Link>
          <Link to="/salary" className="hover:text-purple-700 transition hidden xl:inline">EvocaSALARY</Link>
          <Link to="/touch" className="hover:text-purple-700 transition hidden xl:inline">EvocaTOUCH</Link>
        </nav>

        {/* Առցանց Բանկի կոճակ */}
        <button className="bg-[#6600cc] hover:bg-[#5500aa] text-white px-7 py-2 rounded-3xl font-bold text-sm tracking-wide shadow-md transition">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
}