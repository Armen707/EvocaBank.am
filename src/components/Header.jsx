import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, MapPin, HelpCircle, Globe, Menu } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // <-- Ներմուծում ենք i18next-ը

export default function Header() {
  const location = useLocation();
  const { i18n } = useTranslation(); // <-- Ստանում ենք i18n ֆունկցիաները

  // State՝ գլոբուսի մենյուի բաց/փակ լինելը կառավարելու համար
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langMenuRef = useRef(null);

  // Փակել մենյուն, եթե սեղմենք դրսում
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Լեզուն փոխելու ֆունկցիա
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLangOpen(false); // Ընտրելուց հետո փակում ենք մենյուն
  };

  // Функция для проверки активного пути
  const isActive = (path) => location.pathname === path;

  // Вспомогательная функция для стилей верхних ссылок
  const getTopNavLinkClass = (path) => {
    const active = isActive(path);
    return `transition pb-1 ${
      active
        ? 'text-purple-700 border-b-2 border-purple-700 font-semibold'
        : 'hover:text-purple-700 text-gray-700'
    }`;
  };

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50 font-sans">
      {/* 1. Верхний слой (с динамическим фиолетовым подчеркиванием) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex justify-between items-center text-[13px] py-2 border-b text-gray-700">
        {/* Левая сторона: Ссылки разделов */}
        <div className="flex items-center gap-6 font-medium">
          <Link to="/" className={getTopNavLinkClass('/')}>
            Անհատ
          </Link>
          <Link to="/business-loans" className={getTopNavLinkClass('/business-loans')}>
            Բիզնես
          </Link>
          <Link to="/instant-payments" className={`hidden md:inline ${getTopNavLinkClass('/instant-payments')}`}>
            Ակնթարթային վճարումներ
          </Link>
          <Link to="/about" className={`hidden lg:inline ${getTopNavLinkClass('/about')}`}>
            Մեր մասին
          </Link>
          <Link to="/news" className={`hidden lg:inline ${getTopNavLinkClass('/news')}`}>
            Նորություններ
          </Link>
          <Link to="/blog" className={`hidden xl:inline ${getTopNavLinkClass('/blog')}`}>
            Բլոգ
          </Link>
          <Link to="/career" className={`hidden xl:inline ${getTopNavLinkClass('/career')}`}>
            Կարիերա
          </Link>
        </div>

        {/* Правая сторона: Ссылки и иконки */}
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
            
            {/* --- ԳԼՈԲՈՒՍԻ ՆՇԱՆԸ ԵՎ ԼԵԶՈՒՆԵՐԻ DROPDOWN-Ը --- */}
            <div className="relative" ref={langMenuRef}>
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1 cursor-pointer focus:outline-none"
                title="Փոխել լեզուն"
              >
                <Globe size={17} className="hover:text-purple-700 transition" />
                <span className="text-xs uppercase font-semibold text-gray-700">
                  {i18n.language}
                </span>
              </button>

              {/* Բացվող ցանկ (Dropdown) */}
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50">
                  <button
                    onClick={() => changeLanguage('hy')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition ${
                      i18n.language === 'hy' ? 'font-bold text-purple-700 bg-purple-50/50' : 'text-gray-700'
                    }`}
                  >
                    Հայերեն (HY)
                  </button>
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition ${
                      i18n.language === 'en' ? 'font-bold text-purple-700 bg-purple-50/50' : 'text-gray-700'
                    }`}
                  >
                    English (EN)
                  </button>
                  <button
                    onClick={() => changeLanguage('ru')}
                    className={`w-full text-left px-4 py-2 text-xs hover:bg-gray-50 transition ${
                      i18n.language === 'ru' ? 'font-bold text-purple-700 bg-purple-50/50' : 'text-gray-700'
                    }`}
                  >
                    Русский (RU)
                  </button>
                </div>
              )}
            </div>
            {/* ------------------------------------------- */}

            <Search size={17} className="cursor-pointer hover:text-purple-700 transition" />
            <Menu size={20} className="cursor-pointer hover:text-purple-700 transition md:hidden" />
          </div>
        </div>
      </div>

      {/* 2. Нижний слой */}
      <div className="max-w-[1540px] mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Логотип */}
        <Link to="/" className="text-4xl font-black tracking-tighter text-gray-800 flex items-center">
          evoca
        </Link>

        {/* Навигация главного меню */}
        <nav className="hidden md:flex items-center lg:gap-10 xl:gap-12 font-medium text-gray-800 text-[15px]">
          <Link to="/loans" className={`transition ${isActive('/loans') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Վարկեր
          </Link>
          <Link to="/cards" className={`transition ${isActive('/cards') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Քարտեր
          </Link>
          <Link to="/deposits" className={`transition ${isActive('/deposits') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Ավանդներ
          </Link>
          <Link to="/accounts" className={`transition ${isActive('/accounts') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Հաշիվներ
          </Link>
          <Link to="/transfers" className={`transition ${isActive('/transfers') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Փոխանցումներ
          </Link>
          <Link to="/securities" className={`transition hidden lg:inline ${isActive('/securities') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            Արժեթղթեր
          </Link>
          <Link to="/salary" className={`transition hidden xl:inline ${isActive('/salary') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            EvocaSALARY
          </Link>
          <Link to="/touch" className={`transition hidden xl:inline ${isActive('/touch') ? 'text-purple-700 font-bold' : 'hover:text-purple-700'}`}>
            EvocaTOUCH
          </Link>
        </nav>

        {/* Кнопка EvocaONLINE */}
        <button className="bg-[#6600cc] hover:bg-[#5500aa] text-white px-7 py-2 rounded-3xl font-bold text-sm tracking-wide shadow-md transition">
          EvocaONLINE
        </button>
      </div>
    </header>
  );
}